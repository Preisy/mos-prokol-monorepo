<script setup lang="ts">
import { QCarouselSlide } from 'quasar';
// import { WServiceSlideCardProps } from './WServiceSlideCard.vue';

defineProps<{
  name: QCarouselSlide['name'];
  //   cardData: WServiceSlideCardProps[];
}>();
</script>
<template>
  <q-carousel-slide :name="name">
    <div flex flex-row justify-between gap-x-8>
      <!-- <WServiceSlide></WServiceSlide> -->
      <slot></slot>
    </div>
  </q-carousel-slide>
</template>
