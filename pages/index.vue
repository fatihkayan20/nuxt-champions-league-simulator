<script setup lang="ts">
import { Stage } from "~~/types/Stage";

useHead({
  title: "Champions League Tournament Simulator",
  meta: [
    {
      name: "description",
      content: "Champions League Tournament Simulator",
    },
  ],
});

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

    <div v-if="activeStage === Stage.QuarterFinal">
      <LazySimulateQuarterFinalStage />
    </div>

    <div v-if="activeStage === Stage.SemiFinal">
      <LazySimulateSemiFinalStage />
    </div>

    <div v-if="activeStage === Stage.Final">
      <LazySimulateFinalStage />
    </div>

    <div v-if="canShowNextButton">
      <LazyNextStepButton />
    </div>
  </div>
</template>
