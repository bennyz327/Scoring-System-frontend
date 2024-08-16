<script setup lang="ts">
const showNavigation = ref(true)
const rail = ref(true)
const menuIcon = computed(() => showNavigation.value ? 'ic:round-menu-open' : 'ic:round-menu')
</script>

<template>
  <v-app theme="defaultTheme">
    <v-app-bar title="圓創力賽事平台">
      <template v-slot:prepend>
        <v-app-bar-nav-icon :icon="menuIcon"
                            @click="showNavigation = !showNavigation"/>
      </template>
    </v-app-bar>
    <client-only>
      <v-navigation-drawer v-model="showNavigation"
                           :rail="rail"
                           expand-on-hover
                           permanent
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

</style>