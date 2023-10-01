<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { scrollToElement } from 'shared/api/SmoothScrollUtils';
import { SBtn } from 'shared/ui/SBtn';
import { SStructure } from 'shared/ui/SStructure';
import HomeChip from './HomeChip.vue';

const { tm } = useI18n();

const targetElement = ref<HTMLElement>();
const onclick = () => {
  if (!targetElement.value) return;
  scrollToElement(targetElement.value);
};
onMounted(
  () => (targetElement.value = <HTMLElement>document.querySelector('.w-order'))
);
</script>

<template>
  <div class="w-home" overflow-hidden relative z-1 mt-4rem>
    <SStructure pt-22rem pb-6rem>
      <div
        flex
        flex-row
        justify-between
        mx-2rem
        class="sm:(justify-end ml-0) 2sm:mr-4.4rem"
      >
        <HomeChip v-for="card in tm('home.cards')" :key="card" rounded-0.5rem>
          {{ card }}
        </HomeChip>
      </div>
      <div text-center>
        <span
          uppercase
          text-primary
          text-xll
          font-700
          :class="{ 'line-height-[1.3]': $q.screen.lt.sm }"
        >
          {{ $t('home.title') }}
        </span>
      </div>
      <div text-center mt-4>
        <SBtn @click="onclick" btn-classes="sm:px-6rem!">
          {{ $t('home.btn') }}
        </SBtn>
      </div>
    </SStructure>

    <img
      src="widgets/WHome/background.png"
      translate-x="-30%"
      sm:translate-x-none
      absolute
      top-0
      z--1
      w-auto
      h-full
      select-none
      pointer-events-none
      class="xl:(w-full h-auto) 4xl:(w-1920px h-auto left-50% translate-x--50%)"
    />
  </div>
</template>
