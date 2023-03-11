import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import svgLoader from 'vite-svg-loader'
// @ts-ignore
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';

import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),svgLoader(),

  DefineOptions(),
  // mockserver
  mockServer({
    logLevel: 'error'
  })
  ],
  css:{
    postcss: {
      plugins:[
        postcssNested,
        postcssImport,
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },

  }
})
