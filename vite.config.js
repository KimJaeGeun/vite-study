import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ]
    },
    base: "/q/"
    // resolve: {
    //   alias: {
    //     "@": path.resolve(__dirname, "./src)")
    //   }
    // },
    // define: { baseUrl }
});
