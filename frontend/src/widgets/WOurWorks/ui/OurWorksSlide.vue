<script setup lang="ts">
defineProps<{
  name: string;
  imgSrc: string[3];
}>();
</script>

<template>
  <q-carousel-slide :name="name">
    <div grid grid-cols-3 grid-rows-2>
      <q-img :src="imgSrc[0]" row-span-2 col-span-2 />
      <q-img :src="imgSrc[1]" />
      <q-img :src="imgSrc[2]" />
    </div>
  </q-carousel-slide>
</template>
