<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SBtn } from 'shared/ui/SButton';
import { SStructure } from 'shared/ui/SStructure';
import HomeChip from './HomeChip.vue';

const { tm } = useI18n();
</script>

<template>
  <div class="content-wrapper" overflow-hidden relative>
    <SStructure my-70>
      <div class="advances" flex flex-row justify-end>
        <HomeChip v-for="card in tm('home.cards')" :key="card">
          {{ card }}
        </HomeChip>
      </div>
      <div class="title" text-center>
        <span uppercase text-primary text-xl font-700>
          {{ $t('home.title') }}
        </span>
      </div>
      <div class="button" text-center mt-4>
        <SBtn>{{ $t('home.btn') }}</SBtn>
      </div>
    </SStructure>
    <img
      src="/widgets/WHome/background.png"
      absolute
      w-full
      h-full
      top-0
      z--1
    />
  </div>
</template>
