<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getShows } from '@/api/publicApi';
import type { Show } from '@/api/types';
import AppSlider from '@/components/app/AppSlider.vue';
import { SwiperSlide } from 'swiper/vue';
import AppCard from '@/components/app/AppCard.vue';
import AppContainer from '@/components/app/AppContainer.vue';

const MINIMUM_NUMBER_OF_SHOWS_PER_GENRE = 7;

const shows = ref<Array<Show>>([]);
const errorMessage = ref('');
const isLoading = ref(false);

onMounted(() => fetchShows());

const filteredShowsByGenre = computed(() => {
  const result: { [key: string]: Show[] } = {};
  for (let i = 0; i < shows.value.length; i++) {
    const currentShow = shows.value[i];
    const currentGenre = shows.value[i].genres[0];

    if (!currentGenre) {
      continue;
    }

    if (result[currentGenre]) {
      result[currentGenre].push(currentShow);
    } else {
      result[currentGenre] = [currentShow];
    }
  }

  return result;
});

const sortedShowsByRating = computed(() => {
  const result = { ...filteredShowsByGenre.value };

  for (const key in result) {
    if (result[key].length < MINIMUM_NUMBER_OF_SHOWS_PER_GENRE) {
      delete result[key];
      continue;
    }
    result[key].sort((a, b) => b.rating.average - a.rating.average);
  }

  return result;
});

async function fetchShows() {
  isLoading.value = true;
  const promises = [];
  try {
    // Just fetch first 3 pages because the API does not support query by genre and we want to have shows list be sorted based on rating
    for (let i = 1; i <= 3; i++) {
      promises.push(getShows(i));
    }
    const result = await Promise.all(promises);
    for (let i = 0; i < result.length; i++) {
      const { data } = result[i];
      shows.value.push(...data);
    }
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
  <AppContainer :isLoading="isLoading" :errorMessage="errorMessage">
    <AppSlider v-for="(shows, genre) in sortedShowsByRating" :key="genre" :title="genre as string">
      <SwiperSlide v-for="(show, index) in shows" :key="show.id" :virtualIndex="index">
        <RouterLink :to="`/details/${show.id}`">
          <AppCard :show="show" />
        </RouterLink>
      </SwiperSlide>
    </AppSlider>
  </AppContainer>
</template>
