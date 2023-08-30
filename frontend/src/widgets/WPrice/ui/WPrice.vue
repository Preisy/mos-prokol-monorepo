<script setup lang="ts">
import { SStructure } from 'shared/ui/SStructure';
import PriceDescList from './PriceDescList.vue';
import PriceSpreadsheet from './PriceSpreadsheet.vue';
</script>

<template>
  <div class="w-price" bg-black overflow-hidden relative>
    <SStructure py-30 pb-2rem w-min relative>
      <PriceSpreadsheet relative z-1></PriceSpreadsheet>
      <div relative z-1 text-primary font-600 text-base mx-4 mt-7>
        <p>{{ $t('price.description') }}</p>
        <PriceDescList></PriceDescList>
      </div>
      <img
        src="/widgets/WPrice/background.png"
        absolute
        w-full
        top-0
        left-0
        z-0
      />
    </SStructure>
  </div>
</template>
