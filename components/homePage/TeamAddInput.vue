<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";

const { allTeams, hasEnoughTeams, totalTeams } = useTeamsStore();
const teamName = ref("");

const findNextGroupName = () => {
  const groupNames = Object.keys(allTeams.value);
  return groupNames.find((group) => allTeams.value[group].length < 4);
};

const addTeam = ({ name, groupName }: { name: string; groupName: string }) => {
  const newTeam: ITeam = {
    id: totalTeams.value,
    name,
    gameDrawn: 0,
    gameLost: 0,
    gamePlayed: 0,
    gameWon: 0,
    goalDifference: 0,
    goalAgainst: 0,
    goalFor: 0,
    points: 0,
  };

  allTeams.value[groupName].push(newTeam);

  teamName.value = "";
};

const handleAddTeam = () => {
  if (!teamName.value) {
    return;
  }

  const groupName = findNextGroupName();

  if (!groupName) {
    return;
  }

  addTeam({
    name: teamName.value,
    groupName,
  });
};
</script>

<template>
  <input
    v-if="!hasEnoughTeams"
    type="text"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    v-model="teamName"
    placeholder="Team Name"
    @keypress.enter="handleAddTeam"
  />
</template>
