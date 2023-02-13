<script setup lang="ts">
import { IPlayedMatch } from "~~/types/IPlayedMatch";

defineProps<{
  match: IPlayedMatch;
}>();
</script>

<template>
  <div class="shadow-md rounded-lg border p-4 flex flex-col items-center gap-4">
    {{ match.firstTeam.name }}
    {{ match.firstTeamScore }}
    -
    {{ match.secondTeamScore }}
    {{ match.secondTeam.name }}
  </div>
</template>
