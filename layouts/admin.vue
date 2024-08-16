<script setup lang="ts">
import {useDisplay} from "vuetify";

const showNavigation = ref()
const rail = ref(useDisplay().mdAndUp)
const permanent = ref(useDisplay().mdAndUp)
const menuIcon = computed(() => showNavigation.value ? 'ic:round-menu-open' : 'ic:round-menu')
</script>

<template>
  <v-app theme="defaultTheme">
    <v-app-bar title="圓創力賽事平台">
      <template v-slot:title>
        <div class="d-flex align-center">
          <v-avatar class="icon-logo" image="/favicon.ico"/>
          <v-app-bar-title>圓創力賽事平台</v-app-bar-title>
        </div>
      </template>
      <template v-slot:append>
        <v-app-bar-nav-icon :icon="menuIcon"
                            @click="showNavigation = !showNavigation"/>
      </template>
    </v-app-bar>
    <client-only>
      <v-navigation-drawer v-model="showNavigation"
                           :rail="rail"
                           expand-on-hover
                           :permanent="permanent"
                           rail-width="65">
        <AdminNavigationList/>
      </v-navigation-drawer>
    </client-only>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<style scoped>
.icon-logo {
  margin-right: 25px;
}
</style>