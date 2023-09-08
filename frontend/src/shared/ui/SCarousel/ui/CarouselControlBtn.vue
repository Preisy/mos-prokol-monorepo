<script setup lang="ts">
import { QBtnProps } from 'quasar';

interface Props extends QBtnProps {}
defineProps<Props>();
</script>
<template>
  <q-btn
    class="[&>.q-focus-helper]:display-none before-display-none top-[calc(50%)]"
    hover="scale-110"
    w-9.6
    h-9.6
    duration-300
    round
    :ripple="false"
    padding="none"
    dense
    v-bind="{ ...$props }"
  >
    <slot></slot>
  </q-btn>
</template>
