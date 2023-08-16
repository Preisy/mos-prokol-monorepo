<script setup lang="ts">
export interface WServiceSlideCardProps {
  imgSrc: string;
  text: string;
}

defineProps<WServiceSlideCardProps>();
</script>

<template>
  <div class="card" relative max-w-68>
    <div class="background" rounded-2 overflow-hidden text-0>
      <img :src="imgSrc" relative />
    </div>
    <p absolute bottom-1 left-3.4 text-base text-primary font-700>{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.background::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 31.55%,
    rgba(0, 0, 0, 0.7) 78.97%
  );
}
</style>
