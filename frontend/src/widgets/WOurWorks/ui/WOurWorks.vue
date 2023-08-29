<script setup lang="ts">
import chunk from 'lodash.chunk';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import OurWorksSlide from './OurWorksSlide.vue';

const slideSize = 3;
const slidesImages = [...Array(3).keys()].map(
  (serialNumber) => `widgets/WOurWorks/${serialNumber}.png`
);
const slides = chunk(
  slidesImages.concat(slidesImages).concat(slidesImages),
  slideSize
);
</script>

<template>
  <div class="w-our-works" bg-black overflow-hidden>
    <SStructure py-40>
      <SPrettyHeader w-fit block m-x-auto class="header">
        {{ $t('ourWorks.header') }}
      </SPrettyHeader>
      <SCarousel :infinite="true" :length="slides.length">
        <OurWorksSlide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
          :img-src="slide"
        />
      </SCarousel>
    </SStructure>
  </div>
</template>
