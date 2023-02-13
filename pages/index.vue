<script setup lang="ts">
import { Stage } from "~~/types/Stage";

const { activeStage, canShowNextButton } = useTournamentStore();
const { hasEnoughTeams } = useTeamsStore();
</script>
<template>
  <div class="container mx-auto">
    <LazyGroups />

    <div v-if="!hasEnoughTeams">
      <LazyTeamAddInput />
    </div>

    <div v-if="activeStage === Stage.Group">
      <LazySimulateGroupStage />
    </div>

    <div v-if="canShowNextButton">
      <LazyNextStepButton />
    </div>
  </div>
</template>
