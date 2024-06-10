<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseCard from '@/components/base/BaseCard.vue';
import { searchShow } from '@/api/publicApi';
import type { SearchResult } from '@/api/types';
import SearchNoResult from '@/components/pages/search/SearchNoResult.vue';
import { useInfiniteScroll } from '@/composables/useInfiniteScroll';
import BaseContainer from '@/components/base/BaseContainer.vue';

const props = defineProps<{
  query: string;
}>();

const PAGE_SIZE = 15;

const page = ref(1);
const showResults = ref<Array<SearchResult>>([]);
const isLoading = ref(false);
const endOfScroll = ref(null);
const errorMessage = ref('');

watch(
  () => props.query,
  (newValue) => {
    if (newValue) {
      searchShows(newValue);
    }
  },
  { immediate: true }
);

useInfiniteScroll(endOfScroll, () => {
  page.value++;
});

async function searchShows(query: string) {
  try {
    isLoading.value = true;
    const { data } = await searchShow(query);
    showResults.value = data;
  } catch (error: any) {
    if ('message' in error) {
      errorMessage.value = error.message;
    }
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <BaseContainer :is-loading="isLoading" :error-message="errorMessage">
    <div class="mb-8 text-2xl text-white">Search result for: {{ query }}</div>
    <div v-if="showResults.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <RouterLink
        v-for="{ show } in showResults.slice(0, page * PAGE_SIZE)"
        :key="show.id"
        :to="`/details/${show.id}`"
      >
        <BaseCard :show="show" />
      </RouterLink>
    </div>
    <SearchNoResult v-else />
    <div ref="endOfScroll"></div>
  </BaseContainer>
</template>
