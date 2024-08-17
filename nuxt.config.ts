// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        // 如果在超過 1000 可以使用 manualChunks 來分割
        // output: {
        //   manualChunks(id) {
        //     if (id.includes('node_modules')) {
        //       return id.toString().split('node_modules/')[1].split('/')[0].toString()
        //     }
        //   }
        // },
      }
    },
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'cloudflare-pages',
  },
  devtools: { enabled: true },
  ssr: true,
})
