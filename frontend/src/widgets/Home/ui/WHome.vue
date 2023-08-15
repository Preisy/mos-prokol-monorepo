<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SBtn } from 'shared/ui/button';
import WHomeChip from './WHomeChip.vue';

const { tm } = useI18n();
</script>

<template>
  <div class="content-wrapper" overflow-hidden>
    <div structure m-y-70>
      <div class="advances" flex flex-row justify-end>
        <WHomeChip v-for="card in tm('home.cards')" :key="card">
          {{ card }}
        </WHomeChip>
      </div>
      <div class="title" text-center>
        <span uppercase text-primary text-xl font-700>
          {{ $t('home.title') }}
        </span>
      </div>
      <div class="button" text-center m-t-4>
        <SBtn>{{ $t('home.btn') }}</SBtn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  background: url('./assets/background.png') no-repeat;
  background-size: cover;
  background-position-x: center;
}
</style>
