<script setup lang="ts">
import type { Show } from '@/api/types';
import { StarIcon, PhotoIcon } from '@heroicons/vue/24/solid';
import { formatDate } from '@/utils/formatDate';
import ShowGenreLabel from './ShowGenreLabel.vue';

defineProps<{
  show: Show;
}>();
</script>

<template>
  <div class="group relative w-full select-none overflow-hidden rounded-md">
    <img
      v-if="show.image"
      :src="show.image?.medium"
      alt=""
      class="h-auto w-full rounded-md transition duration-300 group-hover:scale-105"
    />
    <div
      v-else
      class="flex h-full w-full items-center justify-center rounded-md bg-gray-300 transition group-hover:scale-105"
    >
      <PhotoIcon class="size-20" />
    </div>
    <div
      class="absolute left-0 top-0 flex h-full w-full flex-col justify-end gap-y-2 rounded-md bg-gradient-to-t from-black to-transparent to-60% p-3"
    >
      <h2 class="truncate pr-4 text-base leading-none text-white sm:text-lg">{{ show.name }}</h2>
      <div class="flex justify-between text-xs text-gray-300 sm:text-sm">
        <span
          >{{ formatDate(show.premiered) }} {{ show.ended && ` - ${formatDate(show.ended)}` }}</span
        >
        <div v-if="show.rating.average" class="flex items-center gap-x-1">
          <StarIcon class="mb-px size-3 text-yellow-500" />
          <span>{{ show.rating.average }}</span>
        </div>
      </div>
      <div class="hidden flex-wrap gap-2 md:flex">
        <ShowGenreLabel v-for="(genre, index) in show.genres" :key="index" :genre="genre" />
      </div>
    </div>
  </div>
</template>
