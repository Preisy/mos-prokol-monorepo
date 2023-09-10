<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>();
</script>
<template>
  <q-carousel-slide :name="name">
    <q-video :src="url" w-full h-15rem md:h-26rem rounded-2.4 />
  </q-carousel-slide>
</template>
