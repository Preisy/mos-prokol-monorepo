<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SBtn } from 'shared/ui/SBtn';
import { SStructure } from 'shared/ui/SStructure';
import HomeChip from './HomeChip.vue';

const { tm } = useI18n();
</script>

<template>
  <div class="w-home" overflow-hidden relative z-1>
    <SStructure py-70 pb-6rem>
      <div flex flex-row justify-end>
        <HomeChip v-for="card in tm('home.cards')" :key="card">
          {{ card }}
        </HomeChip>
      </div>
      <div text-center>
        <span uppercase text-primary text-xl font-700>
          {{ $t('home.title') }}
        </span>
      </div>
      <div text-center mt-4>
        <SBtn>{{ $t('home.btn') }}</SBtn>
      </div>
    </SStructure>

    <img
      src="/widgets/WHome/background.png"
      absolute
      top-0
      z--1
      w-auto
      h-full
      class="2xl:(w-full h-auto)"
    />
  </div>
</template>
