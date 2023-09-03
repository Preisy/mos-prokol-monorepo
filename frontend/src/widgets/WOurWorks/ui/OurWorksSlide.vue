<script setup lang="ts">
defineProps<{
  name: string;
  imgSrc: string[];
}>();
</script>

<template>
  <q-carousel-slide :name="name">
    <div grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 gap-5>
      <q-img
        v-for="(src, index) in imgSrc"
        :key="src"
        :src="src"
        :class="{ 'row-span-2 col-span-2': index === 0 }"
        loading="eager"
        rounded-2.4
        select-none
        pointer-events-none
      />
    </div>
  </q-carousel-slide>
</template>
