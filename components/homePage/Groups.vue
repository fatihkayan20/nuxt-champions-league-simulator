<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
const { allTeams } = useTeamsStore();
</script>

<template>
  <div class="flex justify-around flex-wrap gap-10 py-4">
    <div v-for="(teams, groupName) in allTeams" :key="groupName" class="flex-1">
      <LazyGroup :teams="teams" :groupName="groupName" />
    </div>
  </div>
</template>
