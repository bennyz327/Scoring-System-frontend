<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
