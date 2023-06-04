import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars'
import context from './src/partials/combined-context';

export default defineConfig({
root: resolve(__dirname, 'src'),
build: {
    outDir: resolve(__dirname, 'dist'),
},
plugins: [handlebars({
    partialDirectory: resolve(__dirname,'src/partials'),
    context
})]
})
