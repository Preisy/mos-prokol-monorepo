<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>();
</script>
<template>
  <q-carousel-slide :name="name">
    <q-video w-full h-26rem :src="url" />
  </q-carousel-slide>
</template>
