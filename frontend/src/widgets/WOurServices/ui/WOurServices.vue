<script setup lang="ts">
// import { chunk } from 'lodash';
import { QDialog } from 'quasar';
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SSlider } from 'shared/ui/SSlider';
import { SStructure } from 'shared/ui/SStructure';
// import ServiceSlide from './ServiceSlide.vue';
import ServiceSlideCard from './ServiceSlideCard.vue';

const { tm } = useI18n();
const q = useQuasar();

const buildedSlides = (tm('services.slides') as string[]).map(
  (cardText, cardIndex) => ({
    text: cardText,
    imgSrc: `/widgets/WOurServices/${cardIndex}.png`,
  })
);

const sliderParts = computed(() =>
  !q.screen.lt.lg ? 3 : !q.screen.lt.md ? 2 : 1
);
// const slides = computed(() => chunk(buildedSlides, chunkSize.value));

const dialog = ref<InstanceType<typeof QDialog>>();
const imgSource = ref();
const onImgSelect = (imgSrc: string) => {
  if (!dialog.value) return;
  imgSource.value = imgSrc;
  dialog.value.show();
};
</script>
<template>
  <div class="w-our-services" overflow-hidden>
    <SStructure py-4rem>
      <SPrettyHeader w-fit left="5/10" translate-x="-5/10">
        {{ $t('services.header') }}
      </SPrettyHeader>

      <SSlider
        min-h-12.5rem
        :length="buildedSlides.length"
        :parts="sliderParts"
      >
        <ServiceSlideCard
          v-for="(card, cardIndex) in buildedSlides"
          :key="cardIndex"
          v-bind="card"
          @img-selected="onImgSelect"
        />
      </SSlider>

      <q-dialog ref="dialog" full-height>
        <q-img :src="imgSource" fit="contain" overflow="hidden!" />
      </q-dialog>
    </SStructure>
  </div>
</template>
