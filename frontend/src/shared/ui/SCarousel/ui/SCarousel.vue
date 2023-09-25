<script setup lang="ts">
import { QCarousel, QCarouselProps } from 'quasar';
import { ref, watch } from 'vue';
import CarouselControlBtn from './CarouselControlBtn.vue';
import CarouselDownControls from './CarouselDownControls.vue';

interface SCarouselProps extends QCarouselProps {
  length: number;
  needDownControls?: boolean;
}

const props = defineProps<SCarouselProps>();
const slide = ref('0');
const carousel = ref<InstanceType<typeof QCarousel>>();
onMounted(() => {
  for (let i = 0; i < props.length; i++)
    setTimeout(() => carousel.value?.next(), 0);
});

watch(
  () => props.length,
  () => {
    if (parseInt(slide.value) >= props.length) slide.value = '0';
  }
);
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
      swipeable
      w-full
      mx-auto
      h-auto
      bg-unset
      keep-alive
      z-1
      class="[&>.q-panel.scroll]:overflow-hidden"
    >
      <slot></slot>
    </q-carousel>

    <div v-if="needDownControls" sm:mt-2 z-1 relative>
      <CarouselDownControls :count="length" v-model:current="slide" />
    </div>

    <CarouselControlBtn
      v-if="length > 1"
      @click="carousel?.previous()"
      text-attractive2
      absolute
      z-1
      translate-y="-5/10"
      left--1.5rem
    >
      <q-icon name="chevron_left" size="2rem" />
    </CarouselControlBtn>
    <CarouselControlBtn
      v-if="length > 1"
      @click="carousel?.next()"
      text-attractive2
      absolute
      z-1
      translate-y="-5/10"
      right--1.5rem
    >
      <q-icon name="chevron_right" size="2rem" />
    </CarouselControlBtn>
  </div>
</template>
