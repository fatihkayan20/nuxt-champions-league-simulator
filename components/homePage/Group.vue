<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
import { Stage } from "~~/types/Stage";
const props = defineProps<{
  teams: ITeam[];
  groupName: string;
}>();

const { activeStage } = useTournamentStore();

const teamNeeded = computed(() => {
  if (
    activeStage.value === Stage.Final ||
    activeStage.value === Stage.SemiFinal
  ) {
    return 1;
  }

  if (activeStage.value === Stage.QuarterFinal) {
    return 2;
  }

  return 4;
});

const sortedTeams = computed(() => {
  return props.teams
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
    .slice(0, teamNeeded.value);
});
</script>

<template>
  <TransitionGroup
    tag="div"
    name="team-list"
    class="border flex-1 bg-slate-500"
  >
    <h2 class="text-center border-b">{{ groupName.toLocaleUpperCase() }}</h2>

    <div v-for="team in sortedTeams" :key="team.id">
      <LazyTeam :team="team" />
    </div>
  </TransitionGroup>
</template>

<style>
.team-list-move,
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
