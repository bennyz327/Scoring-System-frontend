<script setup lang="ts">
const showNavigation = ref(false)
const rail = ref(true)
</script>

<template>
  <v-app theme="defaultTheme">
    <v-app-bar title="圓創力賽事平台 - 實況室"/>
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

</style>