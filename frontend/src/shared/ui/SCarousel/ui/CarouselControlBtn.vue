<script setup lang="ts">
import { QBtnProps } from 'quasar';

defineProps<QBtnProps>();
</script>
<template>
  <q-btn
    class="[&>.q-focus-helper]:display-none"
    hover="scale-110"
    w-9.6
    h-9.6
    duration-300
    round
    :ripple="false"
    padding="none"
    v-bind="{ ...$props }"
  >
    <slot></slot>
  </q-btn>
</template>
