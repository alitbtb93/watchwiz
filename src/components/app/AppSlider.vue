<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Virtual, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/assets/stylesheets/swiper.css';

defineProps<{
  title: string;
  sliderOptions?: SwiperOptions;
}>();
</script>

<template>
  <section class="py-8">
    <h2 class="mb-4 text-2xl text-white">{{ title }}</h2>
    <!-- @vue-ignore: Typing issue in Swiper component - remove this after fix by Swiper -->
    <Swiper
      :slides-per-view="2"
      space-between="16"
      :navigation="true"
      :modules="[Navigation, Virtual, Mousewheel]"
      :virtual="{
        addSlidesAfter: 4,
        addSlidesBefore: 4
      }"
      :grabCursor="true"
      :mousewheel="{
        forceToAxis: true
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 3
        },
        '1024': {
          slidesPerView: 5
        }
      }"
      v-bind="sliderOptions"
    >
      <slot />
    </Swiper>
  </section>
</template>
