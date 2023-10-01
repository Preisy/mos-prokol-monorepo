<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import PriceCell from './PriceCell.vue';

export interface PriceSpreadsheetRow {
  param: number | string;
  price: number;
}
export interface PriceSpreadsheedHead {
  first: string;
  second: string;
}
export interface PriceSpreadsheetProps {
  title: string;
  header?: PriceSpreadsheedHead;
  rows: Array<PriceSpreadsheetRow>;
}
defineProps<PriceSpreadsheetProps>();
</script>

<template>
  <div
    bg-primary
    flex
    flex-col
    box-border
    w-fit
    sm:w-min
    rounded-3.6
    mx-auto
    p-3.4
    class="md:(py-8 px-16)"
  >
    <SPrettyHeader
      class="[&>.main]:(text-12 text-black mt-0) [&>.secondary]:(text-white mt-0)"
      mx-auto
      block
    >
      {{ title }}
    </SPrettyHeader>
    <table text-center w-fit border-collapse uppercase sm:whitespace-nowrap>
      <tr v-if="header" text-lgx bg="attractive2/10" font-600>
        <PriceCell class="border-(l-0! t-0!)">
          {{ header.first }}
        </PriceCell>
        <PriceCell class="border-(r-0! t-0!)">
          {{ header.second }}
        </PriceCell>
      </tr>
      <tr v-for="(row, index) in rows" :key="index" font-500 text-lgs>
        <PriceCell
          class="border-l-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ row.param }}
        </PriceCell>
        <PriceCell
          class="border-r-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ $t('price.spreadsheets.pretext') }} {{ row.price }}
        </PriceCell>
      </tr>
    </table>
  </div>
</template>
