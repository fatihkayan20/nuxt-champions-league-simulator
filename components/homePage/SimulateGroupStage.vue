<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";

const { allTeams } = useTeamsStore();
const { canShowNextButton, quarterFinals } = useTournamentStore();

const week = ref<1 | 2 | 3 | 4>(1);

const matches = {
  1: [
    [0, 1],
    [2, 3],
  ],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 3],
    [1, 2],
  ],
};

const simulateMatch = (firstTeam: ITeam, secondTeam: ITeam) => {
  const firstTeamScore = Math.floor(Math.random() * 5);
  const secondTeamScore = Math.floor(Math.random() * 5);

  const newFirstTeam = { ...firstTeam };
  const newSecondTeam = { ...secondTeam };

  if (firstTeamScore > secondTeamScore) {
    newFirstTeam.points += 3;
  } else if (firstTeamScore < secondTeamScore) {
    newSecondTeam.points += 3;
  } else {
    newFirstTeam.points += 1;
    newSecondTeam.points += 1;
  }

  newFirstTeam.goalFor += firstTeamScore;
  newFirstTeam.goalAgainst += secondTeamScore;
  newSecondTeam.goalFor += secondTeamScore;
  newSecondTeam.goalAgainst += firstTeamScore;

  allTeams.value = {
    ...allTeams.value,
    [firstTeam.group]: allTeams.value[firstTeam.group].map((team) => {
      if (team.id === newFirstTeam.id) {
        return newFirstTeam;
      }

      if (team.id === newSecondTeam.id) {
        return newSecondTeam;
      }

      return team;
    }),
  };
};

const getQuarterFinals = () => {
  const groups = Object.keys(allTeams.value);

  return groups.map((group) => {
    return allTeams.value[group]
      .sort((a: ITeam, b: ITeam) => {
        if (a.points > b.points) {
          return -1;
        }

        if (a.points < b.points) {
          return 1;
        }

        if (a.goalFor - a.goalAgainst > b.goalFor - b.goalAgainst) {
          return -1;
        }

        if (a.goalFor - a.goalAgainst < b.goalFor - b.goalAgainst) {
          return 1;
        }

        return 0;
      })
      .slice(0, 2);
  });
};

onMounted(() => {
  const interval = setInterval(() => {
    if (week.value === 4) {
      canShowNextButton.value = true;

      quarterFinals.value = getQuarterFinals();

      clearInterval(interval);
      return;
    }

    const groups = Object.values(allTeams.value);

    const matchesOfWeek = matches[week.value];

    groups.forEach((group) => {
      matchesOfWeek.forEach((match) => {
        const firstTeam = group[match[0]];
        const secondTeam = group[match[1]];

        simulateMatch(firstTeam, secondTeam);
      });
    });

    week.value += 1;
  }, 1000);
});
</script>

<template>
  <div></div>
</template>
