<script setup lang="ts">
import { SStructure } from 'shared/ui/SStructure';
import OrderForm from './OrderForm.vue';
</script>

<template>
  <div class="w-order" relative overflow-x-clip>
    <SStructure relative z-1 pt-3rem pb-1.5rem class="sm:py-22">
      <OrderForm max-w-112></OrderForm>
    </SStructure>
    <img
      src="widgets/WOrder/background.png"
      absolute
      left-0
      top="50%"
      translate-y="-50%"
      z-0
      w-auto
      h-full
      class="xl:(w-full h-auto) 3xl:(w-1920px h-full left-50% translate-x--50%)"
      select-none
      pointer-events-none
    />
  </div>
</template>
