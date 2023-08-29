<script setup lang="ts">
import { QCarousel, QCarouselProps } from 'quasar';
import { ref } from 'vue';
import CarouselControlBtn from './CarouselControlBtn.vue';

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
      mx-auto
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
      translate-y="-5/10"
    >
      <CarouselControlBtn @click="carousel?.previous()">
        <q-icon name="chevron_left" />
      </CarouselControlBtn>
      <CarouselControlBtn @click="carousel?.next()">
        <q-icon name="chevron_right" />
      </CarouselControlBtn>
    </div>
  </div>
</template>
