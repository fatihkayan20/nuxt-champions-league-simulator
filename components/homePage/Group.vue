<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
defineProps<{
  teams: ITeam[];
  groupName: string;
}>();
</script>

<template>
  <TransitionGroup
    tag="div"
    name="team-list"
    class="border flex-1 bg-slate-500"
  >
    <h2 class="text-center border-b">{{ groupName }}</h2>

    <div v-for="team in teams" :key="team.id">
      <Team :team="team" />
    </div>
  </TransitionGroup>
</template>

<style>
.team-list-enter-active,
.team-list-leave-active {
  transition: all 0.5s;
}

.team-list-enter-from,
.team-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
