<script setup lang="ts">
defineProps<{
  grayPart: string;
  whitePart: string;
}>();
</script>

<template>
  <div text-base>
    <q-icon name="phone" inline-block mr-1 />
    <span text-gray> {{ grayPart }}</span>
    <span text-white>{{ whitePart }}</span>
  </div>
</template>
