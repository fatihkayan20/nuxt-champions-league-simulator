<script setup lang="ts">
import { Stage } from "~~/types/Stage";

const { activeStage, canShowNextButton } = useTournamentStore();

const texts: Record<Stage, string> = {
  [Stage.TeamSelection]: "Simulate Group Stage",
  [Stage.Group]: "Simulate Quarter Final",
  [Stage.QuarterFinal]: "Simulate Semi Final",
  [Stage.SemiFinal]: "Simulate Final",
  [Stage.Final]: "Congratulations",
};

const nextStageText = computed(() => texts[activeStage.value ?? Stage.Group]);

const handleNextStage = () => {
  const stages = Object.values(Stage);

  const currentStageIndex = stages.findIndex(
    (stage) => stage === activeStage.value
  );

  if (currentStageIndex === -1) {
    activeStage.value = Stage.Group;
    return;
  }

  const nextStep = stages[currentStageIndex + 1];

  activeStage.value = nextStep as Stage;
  setTimeout(() => {
    canShowNextButton.value = false;
  }, 50);
};
</script>

<template>
  <button @click="handleNextStage">{{ nextStageText }}</button>
</template>
