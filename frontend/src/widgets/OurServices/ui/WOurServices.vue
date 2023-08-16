<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SCarousel } from 'shared/ui/carousel';
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import { SStructure } from 'shared/ui/structure';
import { images } from './assets';
import WServiceSlide from './WServiceSlide.vue';
import WServiceSlideCard, {
  WServiceSlideCardProps,
} from './WServiceSlideCard.vue';

const { tm } = useI18n();

const buildSlides = (slidesTextes: string[][]) =>
  slidesTextes.map((slide: string[], slideIndex) => {
    const res: WServiceSlideCardProps[] = [];
    slide.forEach((cardText, cardIndex) =>
      res.push({
        text: cardText,
        imgSrc: images[slideIndex * slide.length + cardIndex],
      })
    );
    return res;
  });

const slides = buildSlides(tm('services.slides'));
console.log(slides);
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
