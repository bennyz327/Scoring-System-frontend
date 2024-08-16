<script setup lang="ts">
definePageMeta({
  layout: 'tournament',
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-select :items="['機器人競賽 2030', '機器人競賽 2031']"
                  label="選擇賽事"
                  class="rounded-t-lg"
                  rounded="t-lg"/>
      </v-col>
      <v-col>
        <v-alert>
          <v-icon left>mdi:information</v-icon>
          賽事實況將於 2022 年 1 月 1 日開始
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card
            append-icon="mdi:open-in-new"
            href="/"
            prepend-icon="mdi:account-group"
            rel="noopener"
            subtitle="查看賽事參賽隊伍"
            target="_blank"
            title="參賽隊伍"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-card
            append-icon="mdi:open-in-new"
            href="/"
            prepend-icon="mdi:account-group"
            rel="noopener"
            subtitle="查看賽事參賽選手"
            target="_blank"
            title="參賽選手"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card
            loading
            disabled
            append-icon="mdi:open-in-new"
            href="/"
            prepend-icon="mdi:sword-cross"
            rel="noopener"
            subtitle="觀看正在比賽的賽事"
            target="_blank"
            title="賽場一覽"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-card
            loading
            disabled
            append-icon="mdi:open-in-new"
            href="/"
            prepend-icon="mdi:tournament"
            rel="noopener"
            subtitle="查看賽事賽程表"
            target="_blank"
            title="賽程表"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.no-border .v-field--variant-underlined .v-field__outline::before{
  border-width: 0;
}
</style>