<script setup lang="ts">
import { DocumentMagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="mt-20 flex flex-col items-center justify-center gap-y-4 px-4 text-center">
    <DocumentMagnifyingGlassIcon class="size-16 text-white" />
    <span class="text-2xl text-white">No results found!</span>
    <span class="text-base text-gray-300"
      >Try adjusting your search to find what you are looking for.</span
    >
  </div>
</template>
