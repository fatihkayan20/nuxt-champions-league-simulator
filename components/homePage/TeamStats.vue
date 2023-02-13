<script setup lang="ts">
import { ITeam } from "~~/types/ITeam";
import { ITeamStat } from "~~/types/ITeamStat";

defineProps<{
  team: ITeam;
}>();

const stats: ITeamStat[] = [
  {
    label: "M",
    name: "gamePlayed",
  },
  {
    label: "W",
    name: "gameWon",
  },
  {
    label: "L",
    name: "gameLost",
  },
  {
    label: "D",
    name: "gameDrawn",
  },
  {
    label: "GF",
    name: "goalFor",
  },
  {
    label: "GA",
    name: "goalAgainst",
  },
  {
    label: "GD",
    name: "goalDifference",
  },
  {
    label: "PTS",
    name: "points",
  },
];
</script>

<template>
  <div class="flex gap-2 justify-end">
    <span v-for="stat in stats">
      {{ team[stat.name] }}
    </span>
  </div>
</template>
