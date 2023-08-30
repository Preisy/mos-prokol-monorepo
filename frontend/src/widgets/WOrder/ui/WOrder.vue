<script setup lang="ts">
import { SStructure } from 'shared/ui/SStructure';
import OrderForm from './OrderForm.vue';
</script>

<template>
  <div class="w-order" bg-black relative overflow-hidden>
    <SStructure relative z-1 py-22>
      <OrderForm max-w-112></OrderForm>
    </SStructure>
    <img
      src="/widgets/WOrder/background.png"
      absolute
      left-0
      top-0
      z-0
      w-full
      select-none
      pointer-events-none
    />
  </div>
</template>
