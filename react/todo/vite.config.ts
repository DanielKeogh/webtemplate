import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	build: {
		outDir: '../../resources/todo',
		lib: {
			entry: 'src/main.tsx',
			name: 'TODOComponents',
		},
	},
	rollupOptions: {
		external: ['vue'],
		output: {
			globals: {
				vue: 'Vue'
			}
		}
	},
	define: {
		'process.env': {}
	},
	server: {
		port: 5002,
		proxy: {
			'/todo': {
				target: 'http://localhost:5000',
				changeOrigin: true,
				secure: false,
				ws: true,
			},
			'/login': 'http://localhost:5000',
		},
	}
})
