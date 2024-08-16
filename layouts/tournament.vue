<script setup lang="ts">
import {Role, useUserStore} from "~/stores/user";

const showNavigation = ref(false)
const rail = ref(true)
const userStore = useUserStore()
</script>

<template>
  <v-app theme="defaultTheme">
    <v-app-bar title="圓創力賽事平台 - 實況室">
      <template v-slot:title>
        圓創力賽事平台 - 實況室
      </template>
      <template v-slot:prepend>
        <v-avatar class="logo" image="/favicon.ico"></v-avatar>
      </template>
      <template v-slot:append>
        <v-btn v-if="userStore.role === Role.Admin"
               color="primary"
               prepend-icon="ic:baseline-admin-panel-settings"
               text="管理頁面"
               to="/admin"/>
      </template>
    </v-app-bar>
    <client-only>
      <v-navigation-drawer v-model="showNavigation"
                           :rail="rail"
                           permanent
                           rail-width="65">
      </v-navigation-drawer>
    </client-only>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  margin-left: 15px;
}
</style>