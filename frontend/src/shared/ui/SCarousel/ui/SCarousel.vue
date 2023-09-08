<script setup lang="ts">
import { QCarousel, QCarouselProps } from 'quasar';
import { ref } from 'vue';
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

    <div
      v-if="length > 1"
      class="controls top-[calc(50%-0.5rem)]"
      w="11/10"
      left="-5/100"
      flex
      flex-row
      justify-between
      text-attractive2
      text-base
      absolute
      z-0
      translate-y="-5/10"
    >
      <CarouselControlBtn @click="carousel?.previous()">
        <q-icon name="chevron_left" size="2rem" />
      </CarouselControlBtn>
      <CarouselControlBtn @click="carousel?.next()">
        <q-icon name="chevron_right" size="2rem" />
      </CarouselControlBtn>
    </div>
  </div>
</template>
