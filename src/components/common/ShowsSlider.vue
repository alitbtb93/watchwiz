<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Navigation, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/assets/stylesheets/swiper.css';
</script>

<template>
  <Swiper
    :slides-per-view="5"
    space-between="16"
    :navigation="true"
    :modules="[Navigation, Virtual]"
    :virtual="true"
    :grabCursor="true"
  >
    <slot />
  </Swiper>
</template>
