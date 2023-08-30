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
  <div
    text-neutral-400
    bg-primary
    p-l-8
    p-y-4
    p-r-3.6
    flex
    flex-row
    w-27rem
    cursor-pointer
    border-solid
    border-0
    class="card"
    :class="{
      'rounded-tl-0.6rem': first,
      'rounded-bl-0.6rem': last,
      'w-28rem ml--1rem rounded-l-0.6rem border-attractive2 border-l-6 [&>.index]:text-attractive2 [&>.desc]:text-black':
        id === currentIndex,
    }"
    @click="$emit('update:currentIndex', id)"
  >
    <div class="index" text-xl line-height-none font-700 m-r-8.8 transition-300>
      {{ textId }}
    </div>
    <div class="desc" text-md uppercase font-600 transition-300>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  will-change: border, border-radius, margin, width;
  transition-delay: 0ms;
  transition-duration: 300ms;
  transition-property: border, border-radius, margin, width;
}
</style>
