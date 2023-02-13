<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";

defineProps<{
  team: ITeam;
}>();
</script>

<template>
  <div>{{ team.name }}</div>
</template>
