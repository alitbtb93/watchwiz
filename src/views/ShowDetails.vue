<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getShowInfo, getShowCast } from '@/api/publicApi';
import type { Show, ShowCast } from '@/api/types';
import { formatDate } from '@/utils/formatDate';
import ShowGenreLabel from '@/components/common/ShowGenreLabel.vue';
import AppSlider from '@/components/app/AppSlider.vue';
import { SwiperSlide } from 'swiper/vue';
import ShowDetailsCast from '@/components/pages/showDetails/ShowDetailsCast.vue';
import { StarIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  id: String
});

const showInfo = ref<Show | null>(null);
const showCast = ref<Array<ShowCast>>([]);

onMounted(() => props.id && getDetails(props.id));

async function getDetails(id: string) {
  try {
    const idNum = parseInt(id);
    const [showInfoResponse, showCastResponse] = await Promise.all([
      getShowInfo(idNum),
      getShowCast(idNum)
    ]);
    showInfo.value = showInfoResponse.data;
    showCast.value = showCastResponse.data;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <section class="mx-auto max-w-screen-2xl px-4 py-16">
    <div class="flex gap-x-16">
      <img :src="showInfo?.image?.original" alt="" class="w-1/4 rounded-md" />
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
          <ShowGenreLabel v-for="(genre, index) in showInfo?.genres" :key="index" :genre="genre" />
        </div>
        <span class="mt-10 text-base text-white" v-html="showInfo?.summary"></span>
      </div>
    </div>
    <AppSlider :title="`Cast of ${showInfo?.name}`" :sliderOptions="{ slidesPerView: 9 }">
      <SwiperSlide v-for="(item, index) in showCast" :key="index" :virtualIndex="index">
        <ShowDetailsCast :item="item" />
      </SwiperSlide>
    </AppSlider>
  </section>
</template>
