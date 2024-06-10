<script setup lang="ts">
import BaseLoadingData from '@/components/base/BaseLoadingData.vue';

defineProps<{
  isLoading: boolean;
  errorMessage?: string;
}>();
</script>

<template>
  <div class="mx-auto max-w-screen-2xl px-4 py-16">
    <BaseLoadingData v-if="isLoading" class="mx-auto w-12" />
    <slot v-else-if="$slots.errorMessage || errorMessage" name="errorMessage">
      <p class="mx-auto my-20 text-center text-xl text-red-500">{{ errorMessage }}</p>
    </slot>
    <slot v-else />
  </div>
</template>
