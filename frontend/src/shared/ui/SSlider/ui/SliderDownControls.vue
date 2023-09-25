<script setup lang="ts">
defineProps<{
  current: number;
  count: number;
}>();
defineEmits<{
  (event: 'update:current', newVal: string): void;
}>();
</script>

<template>
  <div flex gap-x-3.2 w-min mx-auto>
    <div
      v-for="index in count"
      :key="index"
      w-2
      h-2
      sm:w-3.2
      sm:h-3.2
      cursor-pointer
      rounded="1/1"
      bg-neutral-6
      :class="{ 'bg-gradient-yellow': current === index - 1 }"
      @click="$emit('update:current', index - 1)"
    />
  </div>
</template>
