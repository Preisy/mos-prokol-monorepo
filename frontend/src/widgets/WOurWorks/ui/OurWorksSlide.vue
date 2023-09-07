<script setup lang="ts">
defineProps<{
  name: string;
  imgSrc: string[];
}>();

defineEmits<{
  (event: 'imgSelected', imgSrc: string): void;
}>();
</script>

<template>
  <q-carousel-slide :name="name">
    <div grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 gap-5>
      <div
        @click="$emit('imgSelected', src)"
        v-for="(src, index) in imgSrc"
        :key="src"
        :class="{ 'row-span-2 col-span-2': index === 0 }"
      >
        <q-img
          :src="src"
          loading="eager"
          rounded-2.4
          w-full
          h-full
          select-none
          pointer-events-none
        />
      </div>
    </div>
  </q-carousel-slide>
</template>
