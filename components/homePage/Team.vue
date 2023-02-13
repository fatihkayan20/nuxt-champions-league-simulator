<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";

defineProps<{
  team: ITeam;
}>();
</script>

<template>
  <div class="flex items-center justify-between p-2">
    <span>{{ team.name }}</span>
    <LazyTeamStats :team="team" />
  </div>
</template>
