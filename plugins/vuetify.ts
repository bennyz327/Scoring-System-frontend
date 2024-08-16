import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import useIconSets from "~/config/iconfy";
import {defineNuxtPlugin} from "#app";
import {defaultTheme} from "~/config/themes";
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
  icons: {
    sets: useIconSets(),
  },
  components,
  directives,
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
})

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetify)
})
