<script setup lang="ts">
import { IPlayedMatch } from "~~/types/IPlayedMatch";
import { ITeam } from "~~/types/ITeam";

const { canShowNextButton, quarterFinals, semiFinals } = useTournamentStore();

const playedMatches = reactive<IPlayedMatch[]>([]);

const matches = [
  [quarterFinals.value[0][0], quarterFinals.value[1][1]],
  [quarterFinals.value[1][0], quarterFinals.value[0][1]],
  [quarterFinals.value[2][0], quarterFinals.value[3][1]],
  [quarterFinals.value[3][0], quarterFinals.value[2][1]],
];

const simulateMatch = (firstTeam: ITeam, secondTeam: ITeam) => {
  const firstTeamScore = Math.floor(Math.random() * 5);
  const secondTeamScore = Math.floor(Math.random() * 5);

  if (firstTeamScore === secondTeamScore) {
    simulateMatch(firstTeam, secondTeam);
    return;
  }

  const playedMatch: IPlayedMatch = {
    id: `${firstTeam.id}-${secondTeam.id}`,
    firstTeam,
    secondTeam,
    firstTeamScore,
    secondTeamScore,
  };

  playedMatches.push(playedMatch);
};

onMounted(() => {
  matches.forEach((match) => {
    setTimeout(() => {
      simulateMatch(match[0], match[1]);
    }, 1000);
  });

  setTimeout(() => {
    semiFinals.value = [
      [
        playedMatches[0].firstTeamScore > playedMatches[0].secondTeamScore
          ? playedMatches[0].firstTeam
          : playedMatches[0].secondTeam,
      ],
      [
        playedMatches[1].firstTeamScore > playedMatches[1].secondTeamScore
          ? playedMatches[1].firstTeam
          : playedMatches[1].secondTeam,
      ],
      [
        playedMatches[2].firstTeamScore > playedMatches[2].secondTeamScore
          ? playedMatches[2].firstTeam
          : playedMatches[2].secondTeam,
      ],
      [
        playedMatches[3].firstTeamScore > playedMatches[3].secondTeamScore
          ? playedMatches[3].firstTeam
          : playedMatches[3].secondTeam,
      ],
    ];

    canShowNextButton.value = true;
  }, 1500);
});
</script>

<template>
  <h2>QuarterFinals</h2>

  <div class="flex flex-wrap items-center gap-10 w-full">
    <div v-for="match in playedMatches" :key="match.id">
      <LazyEliminationMatchCard :match="match" />
    </div>
  </div>
</template>
