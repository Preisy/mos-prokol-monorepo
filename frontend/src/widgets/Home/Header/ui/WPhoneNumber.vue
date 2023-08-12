<script setup lang="ts">
const props = defineProps<{
  number: string;
}>();

const numbers = props.number
  .split('')
  .filter((char) => char >= '0' && char <= '9')
  .join('');

const result = {
  country: numbers[0],
  region: `(${numbers.substring(1, 4)})`,
  remains: `${numbers.substring(4, 7)}-${numbers.substring(
    7,
    9
  )}-${numbers.substring(9)}`,
};
</script>

<template>
  <div text-base>
    <i i-mdi-call m-r-1 />
    <span text-gray> {{ result.country }} {{ result.region }}</span>
    <span text-white>{{ result.remains }}</span>
  </div>
</template>
