import { useState, useEffect } from "react";
import "./App.css";

interface Taskset {
    id?: number;
    name: string;
    createtime?: Date
    edittime?: Date
}

interface Task {
    id?: number;
    taskset_id: number;
    name: string;
    description: string;
    status: string;
}

const taskApi = '/todo/task';
const tasksetsApi = '/todo/tasksets';
const tasksetApi = '/todo/taskset';

function Card(props: any) {
    const { index, task, parent } = props;
    const [name, setName] = useState<string>(task.name);
    const [status, setStatus] = useState<string>(task.status);
    const [zIndex, setZIndex] = useState<number>(0);
    const [editDisplay, setEditDisplay] = useState<string>('none');
    const [hideOnEditDisplay, setHideOnEditDisplay] = useState<string>('');

    function toggleStatus() {
        var newStatus;
        if (status === "TODO") {
            newStatus = "DONE";
        } else {
            newStatus = "TODO";
        }
        setStatus(newStatus);
        const newTask = { ...task };
        newTask.status = newStatus;
        task.status = newStatus;
        parent.UpdateTask(index, newTask);
    }

    function deleteTask() {
        parent.DeleteTask(index);
    }

    function getTagColor() {
        switch (status) {
            case 'TODO':
                return '#050';
            case 'DONE':
                return '#222';
        }
        return 'transparent';
    }


    function getHideOnEditDisplay(edit: boolean) {
        return edit ? 'none' : '';
    }

    function getEditDisplay(edit: boolean) {
        if (edit) {
            return 'block';
        }
        else {
            return 'none';
        }
    }

    function updateEditControls(newEdit: boolean) {
        setEditDisplay(getEditDisplay(newEdit));
        setHideOnEditDisplay(getHideOnEditDisplay(newEdit))
        setZIndex(newEdit ? 3 : 0);
    }

    function beginEdit() {
        updateEditControls(true);
    }

    function saveNameEdit() {
        updateEditControls(false);
        const newTask = { ...task };
        task.name = newTask.name = name;
        parent.UpdateTask(index, newTask);
    }

    function cancelEdit() {
        updateEditControls(false);
        setName(task.name);
    }

    return (
        <>
            <div className="task-card" style={{ zIndex: zIndex }}>
                <span className="todo-tag" style={{ backgroundColor: getTagColor() }}><p>{status}</p></span>
                <span className="task-card-content" >
                    <p style={{ display: hideOnEditDisplay }}>{name}</p>
                    <textarea value={name} style={{ display: editDisplay }}
                        onChange={e => setName(e.target.value)} />
                </span>
                <span className="button" style={{ display: hideOnEditDisplay }}><button onClick={beginEdit}><Icon name="edit" /></button>

                </span>
                <span className="edit-controls" style={{ display: editDisplay }}>
                    <button onClick={cancelEdit} style={{ top: "-3em" }}><Icon name="cancel" /></button>
                    <button onClick={saveNameEdit} style={{ top: "0em" }}>Save</button>
                    <button onClick={deleteTask} style={{ top: "3em" }} ><Icon name="delete" /></button>
                    <button onClick={toggleStatus} style={{ top: "6em" }}>{status}</button>
                </span>
            </div >
            <div className="overlay" onClick={cancelEdit} style={{ display: editDisplay }} />
        </>
    );
}

function AddTaskForm(props: any) {
    const { parent, taskset } = props;
    const [isHidden, setIsHidden] = useState(true);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    function handleNameChange(event: any) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event: any) {
        setDescription(event.target.value);
    }

    function handleAdd() {
        parent.AddTask({ taskset_id: taskset.id, name: name, description: description, status: 'TODO' });
        setIsHidden(true);
        setName('');
        setDescription('');
    }
    if (isHidden) {
        return (
            <>
                <div className="card">
                    <button onClick={() => setIsHidden(false)}><Icon name='add' /></button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <label>
                    Summary:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Details:
                    <input value={description} onChange={handleDescriptionChange} />
                </label>
                <button onClick={handleAdd}>add</button>
            </>
        );
    }
}

function TasksetSelector(params: any) {
    const { tasksets, parent } = params;

    function configureNewTaskset() {
        parent.selectTaskset({});
    }

    function selectTaskset(ts: Taskset) {
        parent.selectTaskset(ts);
    }

    function TaskSetButton(params: any) {
        const { taskset, parent } = params;
        return (
            <>
                <button onClick={() => parent.selectTaskset(taskset)}>{taskset.name}</button>
            </>
        );
    }

    return (
        <>
            <h3>TOADO</h3>
            <div className="tasksets">
                {tasksets.map((taskset: Taskset, index: number) => {
                    return (
                        <TaskSetButton
                            key={index}
                            taskset={taskset}
                            parent={{ selectTaskset }}
                        />
                    );
                })}
            </div>
            <button onClick={configureNewTaskset}><Icon name='add' /></button>
        </>
    );
}

function Tasks(params: any) {
    const { taskset } = params;
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(LoadTasks, [taskset]);

    function LoadTasks() {
        fetch(taskApi + '?' + new URLSearchParams({ tasksetid: taskset.id }))
            .then((response) => response.json())
            .then((data) => setTasks(data.tasks));
    }

    function SaveTasks(tasks: Task[]) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ taskset_id: taskset.id, tasks: tasks }),
        };
        fetch(taskApi, requestOptions)
            .then((response) => response.json())
            .then((data) => setTasks(data.tasks));
    }

    function AddTask(task: Task) {
        if (taskset.id != null) {
            task.taskset_id = taskset.id;
        }
        const newList = tasks.concat([task]);
        SaveTasks([task]);
        console.log(newList);
        setTasks(newList);
    }

    function DeleteTask(index: number) {
        const tasksToDelete = [tasks[index]];
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ taskset_id: taskset.id, tasks: tasksToDelete }),
        };
        fetch(taskApi, requestOptions)
            .then((response) => response.json())
            .then((data) => setTasks(data.tasks));
    }

    function UpdateTask(index: number, task: Task) {
        const newTasks: Array<Task> = [...tasks];
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tasks: [task] }),
        };
        fetch(taskApi, requestOptions)
            .then((response) => response.json())
            .then(() => {
                newTasks[index] = task;
                setTasks(newTasks);
            });
    }

    return (
        <>
            <div className="tasks">
                {tasks.map((task: Task, index) => {
                    return (
                        <Card
                            key={index}
                            index={index}
                            task={task}
                            parent={{ DeleteTask, UpdateTask }}
                        />
                    );
                })}
            </div>
            <br />
            <AddTaskForm taskset={taskset} parent={{ AddTask }} />
        </>
    );
}

function Icon({ name }: any) {
    return (<><span className="material-symbols-outlined">{name}</span></>);
}

function TasksetEditor(params: any) {
    const { taskset, parent } = params;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState('');

    useEffect(() => {
        setName(taskset.name);
        setIsEdit(taskset.id == null);
    }, [taskset]);

    function beginEdit() {
        setIsEdit(true);
    }

    function endEdit() {
        const newTaskset = { ...taskset };
        newTaskset.name = name;
        newTaskset.edittime = new Date();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ taskset: newTaskset }),
        };
        fetch(tasksetApi, requestOptions)
            .then((response) => response.json())
            .then((data) => parent.selectTaskset(data));
        setIsEdit(false);
    }

    function handleNameChange(event: any) {
        setName(event.target.value);
    }

    function deleteTaskset() {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ taskset: taskset }),
        };
        fetch(tasksetApi, requestOptions)
            .then((response) => response.json())
            .then(() => parent.selectTaskset(null));
    }

    if (isEdit) {
        return (
            <>
                <div className="heading-with-stacked-buttons">
                    <input type="text" value={name} onChange={handleNameChange} />
                    <div className="stacked-buttons">
                        <button onClick={endEdit}><Icon name="done" /></button>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="heading-with-stacked-buttons">
                    <h1>{name}</h1>
                    <div className="stacked-buttons">
                        <button onClick={beginEdit}><Icon name='edit' /></button>
                        <button onClick={deleteTaskset}><Icon name='delete' /></button>
                    </div>
                </div>
            </>
        );
    }
}

function App() {
    const [selectedTaskset, setSelectedTaskset] = useState<Taskset | null>(null);
    const [tasksets, setTasksets] = useState<Taskset[]>([]);

    useEffect(LoadTasksets, []);

    function LoadTasksets() {
        fetch(tasksetsApi)
            .then((response) => response.json())
            .then((data) => setTasksets(data.tasksets));
    }

    function selectTaskset(ts: Taskset) {
        setSelectedTaskset(ts);
        LoadTasksets();
    }

    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <TasksetSelector tasksets={tasksets} parent={{ selectTaskset }} />
                </div>
                {selectedTaskset != null && <TasksetEditor taskset={selectedTaskset} parent={{ selectTaskset }} />}
                {selectedTaskset != null && selectedTaskset.id != null && <Tasks taskset={selectedTaskset} />}
            </div>
        </>
    );
}

export default App;
