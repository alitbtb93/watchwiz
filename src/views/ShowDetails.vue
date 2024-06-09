<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getShowInfo, getShowCast } from '@/api/publicApi';
import type { Show, ShowCast } from '@/api/types';
import { formatDate } from '@/utils/formatDate';
import BaseGenreLabel from '@/components/base/BaseGenreLabel.vue';
import BaseSlider from '@/components/base/BaseSlider.vue';
import { SwiperSlide } from 'swiper/vue';
import ShowDetailsCast from '@/components/pages/showDetails/ShowDetailsCast.vue';
import { StarIcon } from '@heroicons/vue/24/solid';
import BaseImageLoader from '@/components/base/BaseImageLoader.vue';
import BaseLoadingData from '@/components/base/BaseLoadingData.vue';
import BaseError from '@/components/base/BaseError.vue';

const props = defineProps<{
  id: string;
}>();

const showInfo = ref<Show | null>(null);
const showCast = ref<Array<ShowCast>>([]);
const isLoading = ref(false);
const errorMessage = ref('');

onMounted(() => props.id && getDetails(props.id));

async function getDetails(id: string) {
  isLoading.value = true;
  try {
    const idNum = parseInt(id);
    const [showInfoResponse, showCastResponse] = await Promise.all([
      getShowInfo(idNum),
      getShowCast(idNum)
    ]);
    showInfo.value = showInfoResponse.data;
    showCast.value = showCastResponse.data;
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
  <section class="mx-auto max-w-screen-2xl px-4 py-16">
    <BaseError v-if="errorMessage">
      {{ errorMessage }}
    </BaseError>
    <BaseLoadingData v-if="isLoading" class="mx-auto mt-20 w-16" />
    <template v-else>
      <div class="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <BaseImageLoader
          :src="showInfo?.image?.original"
          :alt="showInfo?.name"
          class="w-60 flex-shrink-0 rounded-md md:w-1/3 lg:w-1/4"
        />
        <div class="flex flex-grow flex-col">
          <h2 class="mb-4 text-3xl font-semibold text-white">{{ showInfo?.name }}</h2>
          <div class="mb-2 flex items-center gap-x-2">
            <span class="text-sm text-gray-300">{{ formatDate(showInfo?.premiered) }}</span>
            <div
              v-if="showInfo?.rating.average"
              class="flex items-center gap-x-1 text-sm text-gray-300"
            >
              <StarIcon class="mb-px size-3 text-yellow-500" />
              <span>{{ showInfo.rating.average }}</span>
            </div>
          </div>
          <div class="flex gap-x-2">
            <BaseGenreLabel
              v-for="(genre, index) in showInfo?.genres"
              :key="index"
              :genre="genre"
            />
          </div>
          <span class="mt-10 text-base text-white" v-html="showInfo?.summary"></span>
        </div>
      </div>
      <BaseSlider
        :title="`Cast of ${showInfo?.name}`"
        :sliderOptions="{
          slidesPerView: 3,
          breakpoints: {
            '640': {
              slidesPerView: 4
            },
            '1024': {
              slidesPerView: 9
            }
          }
        }"
      >
        <SwiperSlide v-for="(item, index) in showCast" :key="index" :virtualIndex="index">
          <ShowDetailsCast :item="item" />
        </SwiperSlide>
      </BaseSlider>
    </template>
  </section>
</template>
