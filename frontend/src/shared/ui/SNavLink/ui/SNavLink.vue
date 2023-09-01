<script setup lang="ts">
import { scroll } from 'quasar';

const props = defineProps<{
  targetSelector: string;
}>();

const { getScrollTarget, setVerticalScrollPosition } = scroll;
const targetElement = ref<HTMLElement>();

function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  const offset = el.offsetTop - 100;
  const duration = 500;
  setVerticalScrollPosition(target, offset, duration);
}

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
