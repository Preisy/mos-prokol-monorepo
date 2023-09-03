<script setup lang="ts">
import { SStructure } from 'shared/ui/SStructure';
import OrderForm from './OrderForm.vue';
</script>

<template>
  <div class="w-order" bg-black relative overflow-hidden>
    <SStructure relative z-1 pt-12 py-22 class="sm:pt-22">
      <OrderForm max-w-112></OrderForm>
    </SStructure>
    <img
      src="/widgets/WOrder/background.png"
      absolute
      left-0
      top="50%"
      translate-y="-50%"
      z-0
      w-auto
      h-full
      class="xl:(w-full h-auto)"
      select-none
      pointer-events-none
    />
  </div>
</template>
