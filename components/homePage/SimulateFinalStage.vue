<script setup lang="ts">
import { IPlayedMatch } from "~~/types/IPlayedMatch";
import { ITeam } from "~~/types/ITeam";

const { canShowNextButton, semiFinals, finals, finalWinner } =
  useTournamentStore();
const { playedMatches, simulateMatch } = useSimulateEliminate();

const matches = [[finals.value[0][0], semiFinals.value[0][1]]];

onMounted(() => {
  matches.forEach((match) => {
    setTimeout(() => {
      simulateMatch(match[0], match[1]);
    }, 1000);
  });
  setTimeout(() => {
    finalWinner.value =
      playedMatches[0].firstTeamScore > playedMatches[0].secondTeamScore
        ? playedMatches[0].firstTeam
        : playedMatches[0].secondTeam;
  }, 1500);
});
</script>

<template>
  <h2>Final</h2>

  <div class="flex flex-wrap items-center gap-10 w-full" v-if="!finalWinner">
    <div v-for="match in playedMatches" :key="match.id">
      <LazyEliminationMatchCard :match="match" />
    </div>
  </div>

  <div v-if="finalWinner">
    <h2>Winner Team {{ finalWinner.name }}</h2>
  </div>
</template>
