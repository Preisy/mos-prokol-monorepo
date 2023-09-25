<script setup lang="ts">
import chunk from 'lodash.chunk';
import { QDialog } from 'quasar';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import OurWorksSlide from './OurWorksSlide.vue';

interface Slide {
  type: 'photos' | 'video';
  src: string;
}

const q = useQuasar();
const slideSize = computed(() => (q.screen.lt.md ? 1 : 3));
const slidesImages: Slide[] = [...Array(6).keys()].map((serialNumber) => ({
  type: 'photos',
  src: `widgets/WOurWorks/${serialNumber}.png`,
}));

const slides = computed<Slide[][]>(() => {
  const result = chunk(slidesImages, slideSize.value);
  return result;
});

const dialog = ref<InstanceType<typeof QDialog>>();
const imgSource = ref();
const onImgSelect = (imgSrc: string) => {
  if (!dialog.value) return;
  imgSource.value = imgSrc;
  dialog.value.show();
};
</script>

<template>
  <div class="w-our-works" overflow-hidden>
    <SStructure py-4.5rem class="sm:(py-4rem pb-8rem)" relative>
      <div text-center>
        <SPrettyHeader w-fit block class="header [&>h1]:m-0">
          {{ $t('ourWorks.header') }}
        </SPrettyHeader>
      </div>

      <SCarousel
        need-down-controls
        :infinite="true"
        :length="slides.length"
        w-full
        sm:min-w-19rem
        sm:max-w-25rem
        sm:mx-auto
        md:w-full
        md:max-w-full
      >
        <template v-for="(slide, index) in slides" :key="index">
          <OurWorksSlide
            v-if="slide.length > 1 || slide[0].type === 'photos'"
            :name="index.toString()"
            :img-src="slide.map((item) => item.src)"
            @img-selected="onImgSelect"
          />
        </template>
      </SCarousel>

      <q-dialog ref="dialog">
        <q-img
          fit="contain"
          :src="imgSource"
          select-none
          pointer-events-none
          overflow="hidden!"
        />
      </q-dialog>

      <q-img
        src="widgets/WOurWorks/arrow.png"
        absolute
        bottom-3.6
        sm:bottom-6
        right-0
        sm:right--10
        w-30
        sm:w-60
        select-none
        pointer-events-none
      />
    </SStructure>
  </div>
</template>
