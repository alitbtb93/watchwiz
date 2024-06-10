<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/solid';

defineProps<{
  src?: string;
  alt?: string;
}>();
</script>

<template>
  <div class="h-full">
    <img v-if="src" :src="src" :alt="alt" class="h-auto w-full rounded-md" />
    <div
      v-else
      data-testId="placeholder-image"
      class="flex h-full min-h-64 w-full items-center justify-center rounded-md bg-gray-300 transition group-hover:scale-105 md:min-h-[inherit]"
    >
      <PhotoIcon class="size-20" />
    </div>
  </div>
</template>
