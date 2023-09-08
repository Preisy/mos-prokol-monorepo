<script setup lang="ts">
import chunk from 'lodash.chunk';
import { QDialog } from 'quasar';
import { SCarousel } from 'shared/ui/SCarousel';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import OurWorksSlide from './OurWorksSlide.vue';

const q = useQuasar();
const slideSize = computed(() => (q.screen.lt.sm ? 1 : 3));
const slidesImages = [...Array(3).keys()].map(
  (serialNumber) => `widgets/WOurWorks/${serialNumber}.png`
);
const slides = computed(() =>
  chunk(slidesImages.concat(slidesImages).concat(slidesImages), slideSize.value)
);
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
    <SStructure py-1.5rem pb-4rem class="sm:(py-4rem pb-8rem)" relative>
      <div text-center>
        <SPrettyHeader w-fit block class="header [&>h1]:m-0">
          {{ $t('ourWorks.header') }}
        </SPrettyHeader>
      </div>

      <SCarousel need-down-controls :infinite="true" :length="slides.length">
        <OurWorksSlide
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
          :img-src="slide"
          @img-selected="onImgSelect"
        />
      </SCarousel>

      <q-dialog ref="dialog">
        <q-img :src="imgSource" />
      </q-dialog>

      <q-img
        src="/widgets/WOurWorks/arrow.png"
        absolute
        bottom-3.6
        sm:bottom-6
        right-0
        sm:right--10
        w-30
        sm:w-60
      />
    </SStructure>
  </div>
</template>
