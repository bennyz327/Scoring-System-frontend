<script setup lang="ts">

import type {Id, Match, MatchGame, Participant, Stage} from "~/module/brackets-model";

definePageMeta({
  layout: 'tournament',
})

type ViewerData = {
  stage: Stage[],
  match: Match[],
  match_game: MatchGame[],
  participant: Participant[],
}
const data: ViewerData = {
  stage: [
    {
      id: 1,
      tournament_id: 1,
      name: '國小輕量',
      type: 'double_elimination',
      settings: {},
      number: 1.
    },
    // {
    //   id: 2,
    //   tournament_id: 1,
    //   name: 'RoundTwo',
    //   type: 'double_elimination',
    //   settings: {},
    //   number: 2.
    // },
  ],
  match: [
    {
      id: 1,
      status: 4,
      opponent1: {
        id: 1,
        score: 2,
        result: 'win',
      },
      opponent2: {
        id: 2,
        score: 0,
        result: 'loss',
      },
      stage_id: 1,
      group_id: 1,
      round_id: 1,
      number: 1,
      child_count: 0,
    },
    {
      id: 2,
      status: 4,
      opponent1: {
        id: 3,
        score: 0,
        result: 'loss',
      },
      opponent2: {
        id: 4,
        score: 5,
        result: 'win',
      },
      stage_id: 1,
      group_id: 1,
      round_id: 1,
      number: 2,
      child_count: 0,
    },
    {
      id: 3,
      status: 3,
      opponent1: {
        id: 1,
        score: 0,
      },
      opponent2: {
        id: 4,
        score: 0,
      },
      stage_id: 1,
      group_id: 1,
      round_id: 2,
      number: 3,
      child_count: 0,
    },
    // 敗組
  ],
  match_game: [],
  participant: [
    {
      id: 1,
      name: '第一隊',
      tournament_id: 1,
    },
    {
      id: 2,
      name: '第二隊',
      tournament_id: 1,
    },
    {
      id: 3,
      name: '第三隊',
      tournament_id: 1,
    },
    {
      id: 4,
      name: '第四隊',
      tournament_id: 1,
    },
  ],
}

const renderBrackets = (_data: ViewerData) => {
  // @ts-ignore
  window.bracketsViewer.render({
    stages: _data.stage,
    matches: _data.match,
    matchGames: _data.match_game,
    participants: _data.participant,
  }, {
    clear: true,
    customRoundName: (info: any) => `第${info.roundNumber}輪`,
    onMatchClick: (match: any) => {
      console.log(match);
      const opponent1 = getParticipant(match.opponent1.id);
      const opponent2 = getParticipant(match.opponent2.id);
      selectMatch.value = {
        ...match,
        opponent1,
        opponent2,
      }
    },
  });
}

const selectMatch = ref<Match & {
  opponent1: Participant & { name: string },
  opponent2: Participant & { name: string }
} | null>(null);

// 模擬查詢隊伍資料
const database = [
  {
    id: 1,
    name: '第一隊',
  },
  {
    id: 2,
    name: '第二隊',
  },
  {
    id: 3,
    name: '第三隊',
  },
  {
    id: 4,
    name: '第四隊',
  },
]
const getParticipant = (id: Id) => {
  if (!id) return
  return database.find(item => item.id === id) ? database.find(item => item.id === id) : {name: '未知隊伍'}
}

onMounted(() => {
  // @ts-ignore
  window.bracketsViewer.addLocale('zh-TW', {
    common: {
      "group-name-winner-bracket": '勝者組',
      "group-name-loser-bracket": '敗者組',
    },
  })
  window.localStorage['i18nextLng'] = 'zh-TW'
  renderBrackets(data)
})

</script>

<template>
  <div>

    <v-app-bar title="即時賽況">
      <template v-slot:append>
        <v-btn append-icon="ic:baseline-keyboard-return" to="/">返回</v-btn>
      </template>
    </v-app-bar>

    <v-container>
      <div class="brackets-viewer"/>
    </v-container>

    <v-dialog v-model="selectMatch">
      <v-card v-if="selectMatch">
        <v-card-title>
          競賽 {{ selectMatch.opponent1.name }} V.S {{ selectMatch.opponent2.name }}
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<style scoped>

</style>