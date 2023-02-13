<script setup lang="ts">
import { IPlayedMatch } from "~~/types/IPlayedMatch";

defineProps<{
  playedMatches: IPlayedMatch[];
}>();
</script>

<template>
  <div class="flex flex-wrap items-center gap-10 w-full">
    <div v-for="match in playedMatches" :key="match.id">
      <LazyEliminationMatchCard :match="match" />
    </div>
  </div>
</template>
