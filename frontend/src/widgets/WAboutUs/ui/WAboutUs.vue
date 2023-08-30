<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';

const { tm } = useI18n();
</script>
<template>
  <div class="w-about-us" bg-black overflow-hidden relative mt--16>
    <SStructure pt-4rem pb-3rem relative z-1>
      <SPrettyHeader>{{ $t('about.header') }}</SPrettyHeader>
      <div w="7.5/10" text-white font-600>
        <div v-for="(line, lineIndex) of tm('about.desc')" :key="lineIndex">
          <p
            v-html="line"
            class="[&>strong]:text-attractive2 [&>li::marker]:text-attractive2"
          ></p>
        </div>
      </div>
    </SStructure>
    <div
      absolute
      rounded="5/10"
      translate-x="4/10"
      top-0
      right-0
      h="11/10"
      class="after-(block content-empty w-full h-full absolute top-0 left-0 bg-gradient-shadow-left)"
    >
      <img
        src="/widgets/WAboutUs/background.png"
        z-0
        brightness-70
        rounded="5/10"
        h-full
        w-full
      />
    </div>
  </div>
</template>
