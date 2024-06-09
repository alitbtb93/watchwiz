<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Virtual, Mousewheel } from 'swiper/modules';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/assets/stylesheets/swiper.css';

defineProps<{
  title: string;
  sliderOptions?: SwiperOptions;
}>();

const { greaterOrEqual } = useBreakpoints(breakpointsTailwind);
const isSm = greaterOrEqual('sm');
const isLg = greaterOrEqual('lg');
</script>

<template>
  <section class="py-8">
    <h2 class="mb-4 text-2xl text-white">{{ title }}</h2>
    <!-- @vue-ignore: Typing issue in Swiper component - remove this after fix by Swiper -->
    <Swiper
      :slides-per-view="isLg ? 5 : isSm ? 3 : 2"
      space-between="16"
      :navigation="true"
      :modules="[Navigation, Virtual, Mousewheel]"
      :virtual="true"
      :grabCursor="true"
      :mousewheel="{
        forceToAxis: true
      }"
      :keyboard="true"
      v-bind="sliderOptions"
    >
      <slot />
    </Swiper>
  </section>
</template>
