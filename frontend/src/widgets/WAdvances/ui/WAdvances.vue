<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import AdvanceCard from './AdvanceCard.vue';

const { tm } = useI18n();
</script>

<template>
  <div class="w-advances" overflow-hidden>
    <SStructure py-8>
      <SPrettyHeader
        left="50%"
        translate-x="-50%"
        absolute
        md:static
        md:translate-x-0
      >
        {{ $t('advances.header') }}
      </SPrettyHeader>
      <div
        flex
        flex-col
        items-center
        md:flex-row
        justify-center
        gap-x-4
        lg:gap-x-9.6
        gap-y-4
        md:items-stretch
      >
        <AdvanceCard
          max-w-72
          v-for="(card, index) of tm('advances.cards')"
          :key="index"
          v-bind="card"
        />
      </div>
    </SStructure>
  </div>
</template>
