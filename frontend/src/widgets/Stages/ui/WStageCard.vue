<script setup lang="ts">
defineProps<{
  first?: boolean;
  last?: boolean;

  currentIndex: number; //v-model
  id: number;
}>();

defineEmits<{
  (event: 'update:currentIndex', val: number): void;
}>();
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
    justify-between
    class="card"
    :class="{ first, last, active: id === currentIndex }"
    @click="$emit('update:currentIndex', id)"
  >
    <div class="index" text-xl line-height-none font-700 m-r-8.8>01.</div>
    <div class="desc" text-md uppercase font-600>
      Планирование и расчет траектории бурения
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

  .index {
    --uno: text-attractive2;
  }
  .desc {
    color: black;
  }
}
</style>
