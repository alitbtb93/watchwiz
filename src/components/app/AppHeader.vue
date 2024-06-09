<script setup lang="ts">
import AppLogo from '@/components/app/AppLogo.vue';
import AppHeaderSearch from '@/components/app/appHeader/AppHeaderSearch.vue';
</script>

<template>
  <header class="sticky top-0 z-10 h-20 w-full border-b border-solid border-slate-800 bg-slate-950">
    <div class="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
      <AppLogo />
      <AppHeaderSearch />
    </div>
  </header>
</template>
