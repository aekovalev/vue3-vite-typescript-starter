import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
        },
    },
    plugins: [vue()],
});
