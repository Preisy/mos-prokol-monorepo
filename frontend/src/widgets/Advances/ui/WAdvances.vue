<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import WAdvanceCard from './WAdvanceCard.vue';

const { tm } = useI18n();
</script>

<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <div class="structure" m-y-8>
      <SPrettyHeader>{{ $t('advances.header') }}</SPrettyHeader>
      <div flex flex-row justify-between gap-x-6>
        <WAdvanceCard
          max-w-72
          v-for="(card, index) of tm('advances.cards')"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </div>
</template>
