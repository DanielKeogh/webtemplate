function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function makeSortable (items) {
    for (let i of items) {
	i.draggable = true;
	
	i.ondragstart = (ev) => {
	    current = i;
	    for (let it of items) {
		if (it != current) { it.classList.add("hint"); }
	    }
	};
	i.ondragenter = (ev) => {
	    if (i != current) { i.classList.add("active"); }
	};
	i.ondragleave = () => {
	    i.classList.remove("active");
	};
	i.ondragend = () => { for (let it of items) {
            it.classList.remove("hint");
            it.classList.remove("active");
	}};
	i.ondragover = (evt) => { evt.preventDefault(); };
	i.ondrop = (evt) => {
	    evt.preventDefault();
	    if (i != current) {
		let currentpos = 0, droppedpos = 0;
		for (let it=0; it<items.length; it++) {
		    if (current == items[it]) { currentpos = it; }
		    if (i == items[it]) { droppedpos = it; }
		}
		if (currentpos < droppedpos) {
		    i.parentNode.insertBefore(current, i.nextSibling);
		} else {
		    i.parentNode.insertBefore(current, i);
		}
	    }
	};
    }
}

docReady(function () {
    const introDiv = document.getElementById('qsort-intro');
    const phase1Div = document.getElementById('qsort-phase1');
    const phase2Div = document.getElementById('qsort-phase2');
    const phase3Div = document.getElementById('qsort-phase3');
    const phase4Div = document.getElementById('qsort-phase4');
    const resultDiv = document.getElementById('qsort-result');
    const selectDiv = document.getElementById('qsort-cards');
    const selectMax = 10;
    var phase2Cards;
    var phase4Cards;

    function isSelected(card) {
	return card.classList.contains('qselected');
    }
    
    function addSortCards(sortDiv, selectedCards) {
	for (let i = 0; i < selectedCards.length; i++)
	{
	    const card = selectedCards[i];
	    const newDiv = document.createElement('div');
	    newDiv.classList.add('qsortable');
	    newDiv.innerText = card.innerText;
	    sortDiv.appendChild(newDiv);
	}
	makeSortable(sortDiv.children);
    }

    function showPhase1(e) {
	introDiv.style.display = "none";
	phase1Div.style.display = "";
    }

    function showPhase2(selectedCards) {
	const sortDiv = document.getElementById('qsort-phase2-sort');
	addSortCards(sortDiv, selectedCards);
	phase1Div.style.display = "none";
	phase2Div.style.display = "";
    }

    function getSortPhase(selectedDiv)
    {
	const selected = selectedDiv.getElementsByClassName('qsortable');
	const result = new Array();
	for (let i = 0; i < selected.length; i++)
	{
	    result.push(selected[i].innerText);
	}
	return result;
    }

    function showPhase3() {
	phase2Cards = getSortPhase(phase2Div);
	phase2Div.style.display = "none";
	phase3Div.style.display = "";
    }

    function showPhase4(selectedCards) {
	const sortDiv = document.getElementById('qsort-phase4-sort');
	addSortCards(sortDiv, selectedCards);

	phase3Div.style.display = "none";
	phase4Div.style.display = "";
    }

    function showResult() {
	const sortDiv = document.getElementById('qsort-phase4-sort');
	phase4Cards = getSortPhase(sortDiv);
	console.assert(phase2Cards.length == selectMax);
	console.assert(phase4Cards.length == selectMax);
	console.log(phase2Cards);
	console.log(phase4Cards);

	let score = 0.0;
	for (let i = 0; i < selectMax; i++)
	{
	    let phase2Index = phase2Cards.indexOf(phase4Cards[i]);
	    if (0 <= phase2Index)
	    {
		score += (selectMax - i);
	    }
	}
	score *= 2.0;
	score /= 1.1;

	const scoreSpan = document.getElementById('qsort-score');
	scoreSpan.innerText = score.toLocaleString('en-IN', { maximumSignificantDigits: 2 });

	phase4Div.style.display = "none";
	resultDiv.style.display = "";
    }
    
    function setupSelectPhase(div, nextPhaseFn)
    {
	const cards = div.getElementsByClassName('qselectable');
	const nextPhaseButton = div.getElementsByClassName('next-phase-button')[0];
	const selectedDiv = div.getElementsByClassName('qsort-selected')[0];
	let selectedCount = 0;
	function onSelectCard(e) {
	    const card = e.target;
	    if (isSelected(card))
	    {
		card.classList.remove('qselected');
		selectedCount--;
	    }
	    else
	    {
		card.classList.add('qselected');
		selectedCount++;
	    }
	    selectedDiv.innerText = selectedCount;
	    
	    if (selectedCount == selectMax)
	    {
		nextPhaseButton.hidden = null;
	    }
	    else
	    {
		nextPhaseButton.hidden = true;
	    }
	}

	for (let i = 0; i < cards.length; i++)
	{
	    const card = cards[i];
	    card.onmousedown = onSelectCard;
	}

	return function () {
	    const selectedCards = Array.from(cards).filter(isSelected);
	    nextPhaseFn(selectedCards);
	}
    }

    document.getElementById('qsort-start-button').onmousedown = showPhase1;
    document.getElementById('qsort-phase1-done').onmousedown = setupSelectPhase(phase1Div, showPhase2);
    document.getElementById('qsort-phase2-done').onmousedown = showPhase3;
    document.getElementById('qsort-phase3-done').onmousedown = setupSelectPhase(phase3Div, showPhase4);
    document.getElementById('qsort-phase4-done').onmousedown = showResult;
});
