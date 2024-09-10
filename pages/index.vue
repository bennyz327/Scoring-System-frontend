<script setup lang="ts">
import {Role, useUserStore} from "~/stores/user";
import {watch} from "vue";

definePageMeta({
  layout: 'tournament',
})
const userStore = useUserStore()

const toSwitchRoleTarget = ref<Role>(userStore.role)

watch(toSwitchRoleTarget, (value, oldValue) => {
  if (value !== oldValue) userStore.switchRoleTo(toSwitchRoleTarget.value)
})
</script>

<template>
  <v-container>
    <v-alert title="測試用" color="warning" closable close-icon="mdi:close">
      <v-divider class="my-3" thickness="5" color="surface"/>
    <v-select
        color="warning"
        prefix="切換當前身份"
        v-model="toSwitchRoleTarget"
        :items="[{ title: '管理員', value: Role.Admin}, {title: '訪客', value: Role.Anonymous}]"
        placeholder="切換身分"
    />
    </v-alert>
    <v-divider class="mt-3 mb-3"/>
    <v-row align-content="stretch">
      <v-col cols="12" md="4">
        <v-select :items="['機器人競賽 2030', '機器人競賽 2031']"
                  label="選擇賽事"
                  class="rounded-t-lg"
                  rounded="t-lg"/>
      </v-col>
      <v-col cols="12" md="8">
        <v-alert>
          <v-icon left>mdi:information</v-icon>
          賽事實況將於 2022 年 1 月 1 日開始
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card
            loading
            disabled
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
            loading
            disabled
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
            append-icon="mdi:open-in-new"
            href="/race/overview"
            prepend-icon="mdi:tournament"
            rel="noopener"
            subtitle="查看賽事賽程表"
            target="_self"
            title="賽程表"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>