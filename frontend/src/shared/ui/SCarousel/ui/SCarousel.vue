<script setup lang="ts">
import { QCarousel, QCarouselProps } from 'quasar';
import { ref } from 'vue';

interface SCarouselProps extends QCarouselProps {
  length: number;
}

defineProps<SCarouselProps>();
const slide = ref('0');
const carousel = ref<InstanceType<typeof QCarousel>>();
</script>

<template>
  <div relative>
    <q-carousel
      v-bind="{ ...$props, ...$attrs }"
      v-model="slide"
      ref="carousel"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      w="9/10"
      m-x-auto
      h-auto
      bg-unset
    >
      <slot></slot>
    </q-carousel>

    <div
      v-if="length > 1"
      class="controls top-5/10"
      w-full
      flex
      flex-row
      justify-between
      text-attractive2
      text-base
      absolute
    >
      <q-btn
        class="left btn"
        round
        :ripple="false"
        padding="none"
        @click="carousel?.previous()"
      >
        <q-icon name="chevron_left" />
      </q-btn>
      <q-btn
        class="right btn"
        round
        :ripple="false"
        padding="none"
        @click="carousel?.next()"
      >
        <q-icon name="chevron_right" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls {
  transform: translateY(-50%);
}
.btn {
  --at-apply: 'w-9.6 h-9.6';
  transition: 0.3s;

  &:deep(.q-focus-helper) {
    display: none;
  }
  &:hover {
    scale: 1.1;
  }
}
</style>
