import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {HeadlessUiResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({imports: ['vue', 'vue-router'], dts: true}),
    Components({resolvers: [HeadlessUiResolver()], dts: true}),
  ],
});
