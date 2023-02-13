<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
defineProps<{
  teams: ITeam[];
  groupName: string;
}>();
</script>

<template>
  <div>
    <h2>{{ groupName }}</h2>
    <div v-for="team in teams" :key="team.id">
      <Team :team="team" />
    </div>
  </div>
</template>
