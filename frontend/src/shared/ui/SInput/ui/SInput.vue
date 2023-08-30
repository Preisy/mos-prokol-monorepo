<script setup lang="ts">
import { QInputProps } from 'quasar';

interface FormInputProps extends QInputProps {
  title: string;
}

defineProps<FormInputProps>();
</script>

<template>
  <div text-base font-600>
    <div text-secondary3 mb-1>{{ title }}</div>

    <div relative overflow-hidden rounded-0 class="[&>.q-field]:p-0">
      <q-input
        v-bind="{ ...$attrs, ...$props }"
        borderless
        relative
        z-1
        text-base
        font-600
        mx-2
      />

      <div
        w="1/1"
        h="5/1"
        rounded="1/1"
        border-y-0
        border-x-2
        border-secondary3
        border-solid
        absolute
        left-0
        top="5/10"
        translate-y="-5/10"
      />
      <div absolute bg-secondary3 h-2px top-0px left="1/100" right="1/100" />
      <div absolute bg-secondary3 h-2px bottom-0px left="1/100" right="1/100" />
    </div>
  </div>
</template>
