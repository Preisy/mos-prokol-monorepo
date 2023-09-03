<script setup lang="ts">
const props = defineProps<{
  first?: boolean;
  last?: boolean;

  currentIndex: number; //v-model
  id: number;
}>();

defineEmits<{
  (event: 'update:currentIndex', val: number): void;
}>();

const textId =
  props.id.toString().length > 1 ? `0${props.id}.` : `${props.id}.`;
</script>

<template>
  <a
    text-neutral-400
    bg-primary
    px-2
    py-3.2
    md:pl-8
    md:py-4
    md:pr-3.6
    flex
    flex-row
    cursor-pointer
    border-solid
    border-y-neutral-3
    border-y-1
    border-0
    class="card"
    :class="{
      'rounded-tl-0.6rem': first,
      'rounded-bl-0.6rem': last,
      'ml--1rem rounded-l-0.6rem border-attractive2 border-l-6 [&>.index]:text-attractive2 [&>.desc]:text-black':
        id === currentIndex,
    }"
    @click="$emit('update:currentIndex', id)"
  >
    <div
      class="index"
      text-xl
      line-height-none
      font-700
      mr-2
      md:mr-8.8
      transition-300
    >
      {{ textId }}
    </div>
    <div
      class="desc"
      :class="{ 'line-height-none': $q.screen.lt.md }"
      text-mds
      uppercase
      font-600
      transition-300
    >
      <slot></slot>
    </div>
  </a>
</template>

<style scoped lang="scss">
.card {
  will-change: border, border-radius, margin, width;
  transition-delay: 0ms;
  transition-duration: 300ms;
  transition-property: border, border-radius, margin, width;
}
</style>
