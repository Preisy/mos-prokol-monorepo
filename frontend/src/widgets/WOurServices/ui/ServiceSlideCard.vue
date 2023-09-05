<script setup lang="ts">
export interface WServiceSlideCardProps {
  imgSrc: string;
  text: string;
}

defineProps<WServiceSlideCardProps>();
</script>

<template>
  <div class="card" relative h-50 flex-1>
    <div
      class="after-(block absolute w-full h-full top-0 left-0 bg-gradient-shadow content-empty)"
      rounded-2
      overflow-hidden
      text-0
      h-full
    >
      <q-img :src="imgSrc" :draggable="false" w-full relative h-auto />
    </div>
    <p absolute bottom-1 left-3.4 text-base text-primary font-700>{{ text }}</p>
  </div>
</template>
