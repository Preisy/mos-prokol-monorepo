<script setup lang="ts">
import chunk from 'lodash.chunk';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import OurWorksSlide from './OurWorksSlide.vue';

const slideSize = 3;
const _ = [...Array(3).keys()].map((el) => `/ourWorks/${el}.png`);
const slides = chunk(_.concat(_).concat(_), slideSize);
</script>

<template>
  <div class="w-our-works" bg-black overflow-hidden>
    <SStructure m-y-40>
      <SPrettyHeader w-fit block m-x-auto class="header">
        {{ $t('ourWorks.header') }}
      </SPrettyHeader>
      <SCarousel :length="slides.length">
        <OurWorksSlide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
          :img-src="slide"
        ></OurWorksSlide>
      </SCarousel>
    </SStructure>
  </div>
</template>
