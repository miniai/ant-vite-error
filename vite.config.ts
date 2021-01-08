import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

function pathResolve (dir: string) {
    return resolve(__dirname, '.', dir);
}

const alias: Record<string, string> = {
    '/@': pathResolve('src'),
};

export default defineConfig({
    plugins: [vue()],
    alias,
    optimizeDeps: {
        exclude: ['ant-design-vue', 'lodash-es']
    }
})
