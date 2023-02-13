<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
const { allTeams } = useTeamsStore();
</script>

<template>
  <div>
    <h1>Groups</h1>
    <div v-for="(teams, groupName) in allTeams" :key="groupName">
      <LazyGroup :teams="teams" :groupName="groupName" />
    </div>
  </div>
</template>
