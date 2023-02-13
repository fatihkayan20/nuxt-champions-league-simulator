<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";

const { allTeams } = useTeamsStore();
const teamName = ref("");
const totalTeams = computed(() => Object.values(allTeams.value).flat().length);
const showAddTeam = computed(() => totalTeams.value < 16);

const findNextGroupName = () => {
  const groupNames = Object.keys(allTeams.value);
  return groupNames.find((group) => allTeams.value[group].length < 4);
};

const addTeam = ({ name, groupName }: { name: string; groupName: string }) => {
  const newTeam: ITeam = {
    id: totalTeams.value,
    name,
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
    v-if="showAddTeam"
    type="text"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    v-model="teamName"
    placeholder="Team Name"
    @keypress.enter="handleAddTeam"
  />
</template>
