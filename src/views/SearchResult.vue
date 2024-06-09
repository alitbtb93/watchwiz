<script setup lang="ts">
import { ref, watch } from 'vue';
import ShowCard from '@/components/ShowCard.vue';
import { searchShow } from '@/api/publicApi';
import type { SearchResult } from '@/api/types';
import NoResult from '@/components/pages/searchResult/NoResult.vue';
import LoadingData from '@/components/base/LoadingData.vue';
import { useInfiniteScroll } from '@/composables/useInfiniteScroll';

const props = defineProps({
  query: String
});

const PAGE_SIZE = 15;

const page = ref(1);
const showResults = ref<Array<SearchResult>>([]);
const loading = ref(false);
const endOfScroll = ref(null);

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
    loading.value = true;
    const { data } = await searchShow(query);
    showResults.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="mx-auto max-w-screen-2xl px-4 py-16">
    <div class="mb-8 text-2xl text-white">Search result for: {{ query }}</div>
    <div v-if="showResults.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <ShowCard
        v-for="{ show } in showResults.slice(0, page * PAGE_SIZE)"
        :key="show.id"
        :show="show"
      />
    </div>
    <NoResult v-else-if="!loading" />
    <LoadingData v-if="loading" class="mx-auto w-12" />
    <div ref="endOfScroll"></div>
  </section>
</template>
