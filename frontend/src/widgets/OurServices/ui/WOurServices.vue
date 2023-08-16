<script setup lang="ts">
import { SCarousel } from 'shared/ui/carousel';
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import { SStructure } from 'shared/ui/structure';
import WServiceSlide from './WServiceSlide.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import WServiceSlideCard, {
  WServiceSlideCardProps,
} from './WServiceSlideCard.vue';

const slides: WServiceSlideCardProps[][] = [
  [
    {
      imgSrc: 'https://loremflickr.com/320/240',
      text: 'Бестраншейная прокладка водопровода',
    },
    {
      imgSrc: 'https://loremflickr.com/320/240',
      text: 'Бестраншейная прокладка газопровода',
    },
    { imgSrc: 'https://loremflickr.com/320/240', text: 'Установка колодцев' },
  ],
  [
    {
      imgSrc: 'https://loremflickr.com/320/240',
      text: 'Абоба',
    },
    {
      imgSrc: 'https://loremflickr.com/320/240',
      text: 'Бестраншейная прокладка газопровода',
    },
    { imgSrc: 'https://loremflickr.com/320/240', text: 'Установка колодцев' },
  ],
];
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <SStructure m-y-40>
      <SPrettyHeader w-fit block m-x-auto class="header">
        {{ $t('services.header') }}
      </SPrettyHeader>
      <SCarousel :length="slides.length">
        <WServiceSlide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
        >
          <WServiceSlideCard
            v-for="(card, cardIndex) in slide"
            :key="cardIndex"
            v-bind="card"
          />
        </WServiceSlide>
      </SCarousel>
    </SStructure>
  </div>
</template>

<style scoped lang="scss">
.header {
  transform: translateX(-4rem);
}
</style>
