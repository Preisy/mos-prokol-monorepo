<script setup lang="ts">
import { SStructure } from 'shared/ui/SStructure';
import PriceSpreadsheet from './PriceSpreadsheet.vue';
</script>

<template>
  <div class="w-price" bg-black overflow-hidden>
    <SStructure py-30 re>
      <PriceSpreadsheet></PriceSpreadsheet>
      <img src="/widgets/WPrice/background.png" absolute w-full top-0 left-0 />
      <div>
        <p></p>
      </div>
    </SStructure>
  </div>
</template>
