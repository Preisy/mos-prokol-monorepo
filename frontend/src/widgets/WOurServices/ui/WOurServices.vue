<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import ServiceSlide from './ServiceSlide.vue';
import ServiceSlideCard from './ServiceSlideCard.vue';

const { tm } = useI18n();

const buildSlides = (slidesTextes: string[][]) =>
  slidesTextes.map((slide: string[]) =>
    slide.map((cardText, cardIndex) => ({
      text: cardText,
      imgSrc: `/widgets/WOurServices/${cardIndex}.png`,
    }))
  );

const slides = buildSlides(tm('services.slides'));
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <SStructure py-4rem>
      <SPrettyHeader w-fit left="5/10" translate-x="-5/10">
        {{ $t('services.header') }}
      </SPrettyHeader>
      <SCarousel :length="slides.length">
        <ServiceSlide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
        >
          <ServiceSlideCard
            v-for="(card, cardIndex) in slide"
            :key="cardIndex"
            v-bind="card"
          />
        </ServiceSlide>
      </SCarousel>
    </SStructure>
  </div>
</template>
