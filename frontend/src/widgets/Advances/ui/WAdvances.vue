<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import WAdvanceCard, { AdvanceCardProps } from './WAdvanceCard.vue';

interface AdvancesProps {
  cards: AdvanceCardProps[];
}
defineProps<AdvancesProps>();
</script>

<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <div class="structure" m-y-8>
      <SPrettyHeader>наши преимущества</SPrettyHeader>
      <div flex flex-row justify-between gap-x-6>
        <WAdvanceCard
          max-w-72
          v-for="(card, index) of cards"
          :key="index"
          :main-text="card.mainText"
          :sub-text="card.subText"
        />
      </div>
    </div>
  </div>
</template>
