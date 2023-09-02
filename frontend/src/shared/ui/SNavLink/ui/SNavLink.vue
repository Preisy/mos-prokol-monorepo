<script setup lang="ts">
import { scrollToElement } from 'shared/api/SmoothScrollUtils';

const props = defineProps<{
  targetSelector: string;
}>();
const targetElement = ref<HTMLElement>();

const onclick = () => {
  if (!targetElement.value) return;
  scrollToElement(targetElement.value);
};
onMounted(
  () =>
    (targetElement.value = <HTMLElement>(
      document.querySelector(props.targetSelector)
    ))
);
</script>

<template>
  <a
    @click="onclick"
    text-sm
    uppercase
    font-600
    font-inter
    cursor-pointer
    select-none
  >
    <slot></slot>
  </a>
</template>
