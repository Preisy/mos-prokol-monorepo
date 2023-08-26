<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';

interface PriceRow {
  diameter: number;
  price: number;
}

const rows: PriceRow[] = [
  { diameter: 32, price: 1100 },
  { diameter: 63, price: 1350 },
  { diameter: 110, price: 1500 },
  { diameter: 160, price: 2070 },
  { diameter: 225, price: 2600 },
];
</script>

<template>
  <div bg-primary flex flex-col py-8 px-16 box-border w-min rounded-3.6 mx-auto>
    <SPrettyHeader class="pretty-header" mx-auto block>
      {{ $t('price.spreadsheet.header') }}
    </SPrettyHeader>
    <table text-4.8 text-center w-min border-collapse uppercase>
      <tr bg="attractive2/10" font-600 whitespace-nowrap>
        <td class="border-(l-0! t-0!)">
          {{ $t('price.spreadsheet.firstRow.diameter') }}
        </td>
        <td class="border-(r-0! t-0!)">
          {{ $t('price.spreadsheet.firstRow.price') }}
        </td>
      </tr>
      <tr v-for="(row, index) in rows" :key="index" font-500>
        <td
          class="border-l-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ row.diameter }}
        </td>
        <td
          class="border-r-0!"
          :class="{ 'border-b-0!': index === rows.length - 1 }"
        >
          {{ $t('price.spreadsheet.pretext') }} {{ row.price }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.pretty-header {
  &:deep(.main) {
    --uno: text-12 text-black;
  }

  &:deep(.secondary) {
    --uno: text-white left-4 top--8;
  }
}
td {
  --uno: p-1 border-1 border-attractive2 border-solid;
}
</style>
