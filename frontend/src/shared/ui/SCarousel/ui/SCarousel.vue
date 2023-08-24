<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  length: number;
}>();
const slide = ref('0');
const click = (delta: number) => {
  slide.value =
    ((props.length + parseInt(slide.value) + delta) % props.length) + '';
  console.log(slide.value);
};
</script>

<template>
  <div relative>
    <q-carousel
      v-model="slide"
      class="w-9/10"
      m-x-auto
      h-auto
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      bg-unset
    >
      <slot></slot>
    </q-carousel>

    <div
      v-if="length > 1"
      class="controls top-5/10"
      w-full
      flex
      flex-row
      justify-between
      text-attractive2
      text-base
      absolute
    >
      <q-btn
        class="left btn"
        round
        :ripple="false"
        padding="none"
        @click="click(1)"
      >
        <q-icon name="chevron_left" />
      </q-btn>
      <q-btn
        class="right btn"
        round
        :ripple="false"
        padding="none"
        @click="click(-1)"
      >
        <q-icon name="chevron_right" />
      </q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls {
  transform: translateY(-50%);
}
.btn {
  --at-apply: 'w-9.6 h-9.6';
  transition: 0.3s;

  &:deep(.q-focus-helper) {
    display: none;
  }
  &:hover {
    scale: 1.1;
  }
}
</style>
