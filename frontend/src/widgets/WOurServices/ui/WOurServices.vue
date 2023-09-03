<script setup lang="ts">
import { chunk } from 'lodash';
import { useI18n } from 'vue-i18n';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import ServiceSlide from './ServiceSlide.vue';
import ServiceSlideCard from './ServiceSlideCard.vue';

const { tm } = useI18n();
const q = useQuasar();

const buildedSlides = (tm('services.slides') as string[]).map(
  (cardText, cardIndex) => ({
    text: cardText,
    imgSrc: `/widgets/WOurServices/${cardIndex}.png`,
  })
);

const chunkSize = computed(() =>
  !q.screen.lt.lg ? 3 : !q.screen.lt.md ? 2 : 1
);
const slides = computed(() => chunk(buildedSlides, chunkSize.value));
</script>
<template>
  <div class="w-our-services" bg-black overflow-hidden>
    <SStructure py-4rem>
      <SPrettyHeader w-fit left="5/10" translate-x="-5/10">
        {{ $t('services.header') }}
      </SPrettyHeader>
      <SCarousel :length="slides.length" infinite>
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
