<script setup lang="ts">
import type { ShowCast } from '@/api/types';

defineProps<{
  item: ShowCast;
}>();
</script>

<template>
  <div class="flex select-none flex-col">
    <img :src="item.person.image.medium" alt="" class="mb-4 rounded" />
    <h3 class="text-base text-white">{{ item.person.name }}</h3>
    <span class="text-sm text-gray-300">{{ item.character.name }}</span>
  </div>
</template>
