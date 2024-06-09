<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

const searchText = ref('');
const router = useRouter();

function search() {
  if (searchText.value) {
    router.push(`/search/${searchText.value}`);
  }
}
</script>

<template>
  <div
    class="group flex h-8 w-40 items-center rounded-2xl bg-gray-800 focus-within:bg-white sm:w-64"
  >
    <input
      type="text"
      v-model="searchText"
      @keydown.enter="search"
      class="w-3/4 flex-grow bg-transparent pl-4 text-sm text-white outline-none group-focus-within:text-black"
    />
    <MagnifyingGlassIcon
      @click="search"
      class="mx-2 size-5 cursor-pointer text-white group-focus-within:text-black"
    />
  </div>
</template>
