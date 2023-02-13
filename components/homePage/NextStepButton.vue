<script setup lang="ts">
import { Stage } from "~~/types/Stage";

const { activeStage } = useTournamentStore();

const texts: Record<Stage, string> = {
  [Stage.Group]: "Simule Group Stage",
  [Stage.QuarterFinal]: "Simule Quarter Final",
  [Stage.SemiFinal]: "Simule Semi Final",
  [Stage.Final]: "Simule Final",
};

const nextStageText = computed(() => texts[activeStage.value ?? Stage.Group]);

const handleNextStage = () => {
  const stages = Object.keys(Stage);

  const nextStepIndex = stages.findIndex(
    (stage) => stage === activeStage.value
  );

  if (nextStepIndex === -1) {
    activeStage.value = Stage.Group;
    return;
  }

  const nextStep = stages[nextStepIndex + 1];

  activeStage.value = nextStep as Stage;
};
</script>

<template>
  <button @click="handleNextStage">{{ nextStageText }}</button>
</template>
