<script setup lang="ts">
import {nameOf, Role, useUserStore} from "~/stores/user";

definePageMeta({
  layout: 'admin',
})

const userStore = useUserStore()

onMounted(() => {
  if (userStore.role !== Role.Admin) useRouter().push('/')
})
</script>

<template>
  <v-container>
    <v-alert border icon="mdi:info">
      您好 {{ userStore.displayName }} 您目前身分為 {{ nameOf(userStore.role) }}
    </v-alert>
  </v-container>
</template>

<style scoped>

</style>