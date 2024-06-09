<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getShows } from '@/api/publicApi';
import type { Show } from '@/api/types';
import BaseSlider from '@/components/base/BaseSlider.vue';
import { SwiperSlide } from 'swiper/vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseError from '@/components/base/BaseError.vue';

const MINIMUM_NUMBER_OF_SHOWS_PER_GENRE = 7;

const shows = ref<Array<Show>>([]);
const errorMessage = ref('');

onMounted(() => fetchShows());

const filteredShowsByGenre = computed(() => {
  const result = shows.value?.reduce((result: { [key: string]: Array<Show> }, current) => {
    const genre = current.genres[0];
    if (!genre) {
      return result;
    }

    if (result[genre]) {
      return { ...result, [genre]: [current, ...result[genre]] };
    } else {
      return {
        ...result,
        [genre]: [current]
      };
    }
  }, {});

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
  const promises = [];
  try {
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
  }
}
</script>

<template>
  <div class="mx-auto max-w-screen-2xl px-4">
    <BaseSlider
      v-for="(shows, genre) in filteredShowsByGenre"
      :key="genre"
      :title="genre as string"
    >
      <SwiperSlide v-for="(show, index) in shows" :key="show.id" :virtualIndex="index">
        <RouterLink :to="`/details/${show.id}`">
          <BaseCard :show="show" />
        </RouterLink>
      </SwiperSlide>
    </BaseSlider>
    <BaseError v-if="errorMessage">
      {{ errorMessage }}
    </BaseError>
  </div>
</template>
