<script setup lang="ts">
import { QBtnProps } from 'quasar';

interface SBtnProps extends QBtnProps {}
defineProps<SBtnProps>();
</script>

<template>
  <div relative w-fit h-min text-center inline-block class="s-btn">
    <div w="9/10" left="5/100" rounded-2 absolute top-1 h-full bg-btnShadow />
    <q-btn
      v-bind="{ ...$attrs, ...$props }"
      relative
      z-2
      uppercase
      text-base
      tracking-wider
      font-700
      leading-none
      px-16
      py-4
      rounded-1.6
      text-btn-text-color
      overflow-hidden
      class="after"
    >
      <slot></slot>
    </q-btn>
  </div>
</template>

<style scoped lang="scss">
.after {
  ::after {
    content: '';
    --uno: absolute bg-gradient-yellow top-5/10 left-0 translate-y--5/10
      rounded-5/10 w-full h-5/1 z--1;
  }
}
</style>
