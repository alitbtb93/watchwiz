<script setup lang="ts">
import type { Show } from '@/api/types';
import { StarIcon } from '@heroicons/vue/24/solid';

defineProps<{
  show: Show;
}>();
</script>

<template>
  <div class="group relative w-full overflow-hidden rounded-md">
    <img
      :src="show.image.medium"
      alt=""
      class="h-auto w-full rounded-md transition duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <div class="swiper-lazy-preloader"></div>
    <div
      class="absolute left-0 top-0 flex h-full w-full flex-col justify-end gap-y-2 rounded-md bg-gradient-to-t from-black to-transparent to-60% p-3"
    >
      <h2 class="truncate pr-4 text-lg leading-none text-white">{{ show.name }}</h2>
      <div class="flex justify-between text-sm text-gray-300">
        <span
          >{{ show.premiered?.substring(0, 4) }}
          {{ show.ended && ` - ${show.ended?.substring(0, 4)}` }}</span
        >
        <div v-if="show.rating.average" class="flex items-center gap-x-1">
          <StarIcon class="mb-px size-3 text-yellow-500" />
          <span>{{ show.rating.average }}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 text-gray-300">
        <span
          v-for="(genre, index) in show.genres"
          :key="index"
          class="rounded-md border border-gray-300 px-2 py-1 text-xs"
          >{{ genre }}</span
        >
      </div>
    </div>
  </div>
</template>
