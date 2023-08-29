<script setup lang="ts">
export interface StatLineProps {
  value: string | number;
  desc: string;
}
defineProps<StatLineProps>();
</script>

<template>
  <div text-secondary4>
    <span text-2xl font-800 mr-4>{{ value }}</span>
    <span text-md font-600>{{ desc }}</span>
  </div>
</template>
