<script setup lang="ts">

const myAlert = (msg: string) => {
  // alert(msg)
}

const sendError = (msg: string) => {
  throw new Error(msg)
}

// nuxt to page
const push = (path: string) => {
  window.location.href = path
}

const list = ref<{
  icon: string
  title: string
  height: number
  variant: 'tonal' | 'plain'
  onClick?: Function
}[]>([
  {icon: 'mdi:tournament', title: '賽事管理', height: 70, variant: 'tonal', onClick: myAlert},
  {icon: 'ic:baseline-live-tv', title: '實況室', height: 70, variant: 'tonal', onClick: () => { push ('/') }},
  {icon: 'mdi:settings', title: '設定', height: 70, variant: 'tonal', onClick: myAlert},
])

</script>

<template>
  <v-list class="pa-0">
    <v-list-item v-for="item in list"
                 :key="item.title"
                 :height="item.height"
                 :prepend-icon="item.icon"
                 :title="item.title"
                 :variant="item.variant"
                 @click="item.onClick"/>
  </v-list>
</template>

<style scoped>

</style>
