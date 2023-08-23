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
    class="card"
    :class="{ first, last, active: id === currentIndex }"
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

<style scoped lang="scss">
$br-size: 0.6rem;
$default-w: 27rem;
$additive-w: 1rem;
.card {
  width: $default-w;
}
.first {
  border-top-left-radius: $br-size;
}
.last {
  border-bottom-left-radius: $br-size;
}
.active {
  width: calc($additive-w + $default-w);
  margin-left: calc(-1 * $additive-w);
  border-top-left-radius: $br-size;
  border-bottom-left-radius: $br-size;
  --uno: border-attractive2 border-l-6 border-0 border-style-solid;
  .index {
    --uno: text-attractive2;
  }
  .desc {
    color: black;
  }
}
</style>
