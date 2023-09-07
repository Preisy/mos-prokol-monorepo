<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';

const { tm } = useI18n();
</script>
<template>
  <div class="w-about-us" overflow-hidden relative mt--16>
    <SStructure pt-4rem pb-1rem relative z-0>
      <SPrettyHeader
        relative
        translate-x="-1/1"
        sm:translate-x-none
        left="[calc(100%-2rem)]"
        sm:left-auto
      >
        {{ $t('about.header') }}
      </SPrettyHeader>
      <div w-full class="2xl:w-7.5/10" text-white font-600 text-md>
        <div v-for="(line, lineIndex) of tm('about.desc')" :key="lineIndex">
          <p
            mb-0.7rem
            v-html="line"
            class="xl:mb-0.8rem [&>strong]:text-attractive2 [&>li::marker]:text-attractive2"
          />
        </div>
      </div>
      <div
        absolute
        translate-x="4/10"
        top-0
        right-0
        z--1
        h-full
        class="after-(block content-empty w-full h-full absolute top-0 left-0 bg-gradient-shadow-left) bg-wrapper"
      >
        <img
          src="/widgets/WAboutUs/background.png"
          z-0
          brightness-70
          h-full
          w-auto
          select-none
          pointer-events-none
          class="xl:w-full bg-img"
        />
      </div>
    </SStructure>
  </div>
</template>

<style scoped lang="scss">
.bg-wrapper {
  mask-image: url('/widgets/WAboutUs/bg-mask.png');
  mask-repeat: no-repeat;
}
</style>
