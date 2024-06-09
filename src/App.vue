<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/app/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <RouterView />
    </transition>
  </main>
</template>
