<script setup lang="ts">
defineProps<{
  grayPart: string;
  whitePart: string;
}>();
</script>

<template>
  <div text-base>
    <q-icon name="phone" inline-block mr-1 />
    <span text-gray font-500> {{ grayPart }}</span>
    <span text-white font-700>{{ whitePart }}</span>
  </div>
</template>
