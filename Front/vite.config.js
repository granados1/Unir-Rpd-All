import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/',
    test: {
        globals: true, // Permite usar funciones de prueba globales como 'describe', 'test', 'expect' sin importarlas
        environment: 'jsdom', // Usa JSDOM para simular el entorno del DOM de un navegador
        setupFiles: './src/tests/setupTests.js', // Ruta a tu archivo de setup para @testing-library/jest-dom
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // Patrones para encontrar archivos de prueba
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.idea/**', '**/src/main.jsx'], // Excluir carpetas
    },
})
