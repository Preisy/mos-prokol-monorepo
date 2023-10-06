<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SStructure } from 'shared/ui/SStructure';
import MultipleSpreadsheet from './MultipleSpreadsheet.vue';
import PriceDescList from './PriceDescList.vue';
import { PriceSpreadsheetProps } from './PriceSpreadsheet.vue';

const { t } = useI18n();

const tables: Array<PriceSpreadsheetProps> = [
  {
    title: t('price.spreadsheets.base.title'),
    header: {
      first: t('price.spreadsheets.base.header.diameter'),
      second: t('price.spreadsheets.base.header.price')
    },
    rows: [
      { param: 32, price: 1100 },
      { param: 63, price: 1350 },
      { param: 110, price: 2200 },
      { param: 160, price: 2700 },
      { param: 225, price: 3200 }
    ]
  },
  {
    title: t('price.spreadsheets.pnd.title'),
    header: {
      first: t('price.spreadsheets.base.header.diameter'),
      second: t('price.spreadsheets.base.header.price')
    },
    rows: [
      { param: 110, price: 2700 },
      { param: 160, price: 3500 },
      { param: 225, price: 4000 }
    ]
  }
];
</script>

<template>
  <div class="w-price" overflow-hidden relative>
    <SStructure
      md:py-30
      pt-3.5rem
      pb-2rem
      w="fit!"
      sm:w="min!"
      sm:mx-auto
      relative
    >
      <MultipleSpreadsheet :tables="tables" relative z-1></MultipleSpreadsheet>
      <div relative z-1 text-primary font-600 text-base mx-4 mt-7>
        <p>{{ $t('price.description') }}</p>
        <PriceDescList></PriceDescList>
      </div>
      <img
        src="widgets/WPrice/background.png"
        absolute
        w="15/10"
        top-0
        left="-25/100"
        z-0
        select-none
        pointer-events-none
      />
    </SStructure>
  </div>
</template>
