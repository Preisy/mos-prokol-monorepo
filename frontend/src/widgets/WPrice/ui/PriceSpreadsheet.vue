<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import PriceCell from './PriceCell.vue';

const rows: {
  diameter: number;
  price: number;
}[] = [
  { diameter: 32, price: 1100 },
  { diameter: 63, price: 1350 },
  { diameter: 110, price: 1500 },
  { diameter: 160, price: 2070 },
  { diameter: 225, price: 2600 },
];
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
      class="[&>.main]:(text-12 text-black) [&>.secondary]:(text-white)"
      mx-auto
      block
    >
      {{ $t('price.spreadsheet.header') }}
    </SPrettyHeader>
    <table text-center w-fit border-collapse uppercase sm:whitespace-nowrap>
      <tr text-lgx bg="attractive2/10" font-600>
        <PriceCell class="border-(l-0! t-0!)">
          {{ $t('price.spreadsheet.firstRow.diameter') }}
        </PriceCell>
        <PriceCell class="border-(r-0! t-0!)">
          {{ $t('price.spreadsheet.firstRow.price') }}
        </PriceCell>
      </tr>
      <tr v-for="(row, index) in rows" :key="index" font-500 text-lgs>
        <PriceCell
          class="border-l-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ row.diameter }}
        </PriceCell>
        <PriceCell
          class="border-r-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ $t('price.spreadsheet.pretext') }} {{ row.price }}
        </PriceCell>
      </tr>
    </table>
  </div>
</template>
