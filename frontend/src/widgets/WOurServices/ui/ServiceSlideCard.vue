<script setup lang="ts">
export interface WServiceSlideCardProps {
  imgSrc: string;
  text: string;
}

defineProps<WServiceSlideCardProps>();
defineEmits<{
  (event: 'imgSelected', imgSrc: string): void;
}>();
</script>

<template>
  <div
    class="card"
    relative
    h-50
    flex-1
    rounded-2
    overflow-hidden
    @click="$emit('imgSelected', imgSrc)"
  >
    <div
      class="after-(block absolute w-full h-full top-0 left-0 bg-gradient-shadow content-empty)"
      text-0
      h-full
    >
      <q-img
        :src="imgSrc"
        :draggable="false"
        select-none
        pointer-events-none
        w-full
        relative
        h-auto
      />
    </div>
    <p absolute bottom-1 left-3.4 text-base text-primary font-700>{{ text }}</p>
  </div>
</template>
