<script setup lang="ts">
defineProps<{
  name: string;
  imgSrc: string[];
}>();

const placeholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEYSURBVHhe7dExAQAADMOgOa/1yeAJFriFKgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAK4DaHg02RZJtjM4oAAAAAElFTkSuQmCC';
</script>

<template>
  <q-carousel-slide :name="name">
    <div grid grid-cols-3 grid-rows-2 gap-5>
      <q-img
        v-for="(src, index) in imgSrc"
        :key="src"
        :src="src"
        :class="{ 'row-span-2 col-span-2': index === 0 }"
        :placeholder-src="placeholder"
        rounded-2.4
      />
    </div>
  </q-carousel-slide>
</template>
