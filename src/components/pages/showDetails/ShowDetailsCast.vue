<script setup lang="ts">
import type { ShowCast } from '@/api/types';
import BaseImageLoader from '@/components/base/BaseImageLoader.vue';

defineProps<{
  item: ShowCast;
}>();
</script>

<template>
  <div class="flex select-none flex-col">
    <BaseImageLoader :src="item.person.image.medium" :alt="item.person.name" class="mb-4" />
    <h3 data-testId="cast-name" class="text-base text-white">{{ item.person.name }}</h3>
    <span data-testId="cast-character-name" class="text-sm text-gray-300">{{
      item.character.name
    }}</span>
  </div>
</template>
