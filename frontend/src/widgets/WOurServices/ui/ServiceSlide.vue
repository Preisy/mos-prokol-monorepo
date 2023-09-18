<script setup lang="ts">
import { QCarouselSlide } from 'quasar';

defineProps<{
  name: QCarouselSlide['name'];
}>();
</script>
<template>
  <q-carousel-slide :name="name">
    <div flex flex-row justify-between gap-x-8>
      <slot></slot>
    </div>
  </q-carousel-slide>
</template>
