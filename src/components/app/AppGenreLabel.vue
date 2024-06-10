<script setup lang="ts">
defineProps<{
  genre: string;
}>();
</script>

<template>
  <span
    data-testId="show-genre"
    class="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-300"
    >{{ genre }}</span
  >
</template>
