<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import WServiceSlide from './ServiceSlide.vue';
import WServiceSlideCard, {
  WServiceSlideCardProps,
} from './ServiceSlideCard.vue';

const { tm } = useI18n();

const buildSlides = (slidesTextes: string[][]) =>
  slidesTextes.map((slide: string[], slideIndex) => {
    const res: WServiceSlideCardProps[] = [];
    slide.forEach((cardText, cardIndex) =>
      res.push({
        text: cardText,
        imgSrc: `/widgets/WOurServices/${cardIndex}.png`,
      })
    );
    return res;
  });

const slides = buildSlides(tm('services.slides'));
console.log(slides);
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <SStructure py-40>
      <SPrettyHeader w-fit left="5/10" translate-x="-5/10">
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
