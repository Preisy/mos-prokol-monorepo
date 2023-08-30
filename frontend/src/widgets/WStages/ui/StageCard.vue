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
    class="card"
    :class="{
      'rounded-tl-0.6rem': first,
      'rounded-bl-0.6rem': last,
      'w-28rem ml--1rem rounded-l-0.6rem border-attractive2 border-l-6 border-0 border-solid [&>.index]:text-attractive2 [&>.desc]:text-black':
        id === currentIndex,
    }"
    @click="$emit('update:currentIndex', id)"
  >
    <div class="index" text-xl line-height-none font-700 m-r-8.8>
      {{ textId }}
    </div>
    <div class="desc" text-md uppercase font-600>
      <slot></slot>
    </div>
  </div>
</template>
