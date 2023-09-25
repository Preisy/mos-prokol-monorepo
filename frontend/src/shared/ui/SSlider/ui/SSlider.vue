<script setup lang="ts">
import SliderControlBtn from './SliderControlBtn.vue';
import SliderDownControls from './SliderDownControls.vue';

const props = defineProps<{
  length: number;
  parts: number;
}>();

const stepSize = computed(() => 100 / props.parts);
const stepCount = computed(() => props.length - props.parts + 1);
const currentIndex = ref(0);
const left = computed(() => `-${currentIndex.value * stepSize.value}%`);
const width = computed(() => `${stepSize.value * props.length}%`);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % stepCount.value;
};
const previous = () => {
  currentIndex.value =
    (stepCount.value + currentIndex.value - 1) % stepCount.value;
};

const startTouchPos = ref<{ x: number; y: number }>({ x: 0, y: 0 });
const onTouchStart = (e: TouchEvent) => {
  const touch = e.touches[0];
  startTouchPos.value = { x: touch.clientX, y: touch.clientY };
  // console.log(startTouchPos.value);
};
const onTouchEnd = (e: TouchEvent) => {
  const touch = e.changedTouches[0];
  const endPos = { x: touch.clientX, y: touch.clientY };
  const delta = endPos.x - startTouchPos.value.x;
  if (Math.abs(delta) < 20) return;

  if (delta < 0) next();
  else previous();
};
</script>

<template>
  <div class="s-slider" relative py-0.5rem px-0.3rem>
    <div
      relative
      v-bind="{ ...$attrs }"
      overflow-hidden
      @touchend="onTouchEnd"
      @touchstart="onTouchStart"
    >
      <div
        h-full
        absolute
        flex
        transition-all-300
        :class="{ 'gap-x-1rem': parts > 1 }"
        :style="{ left, width }"
      >
        <slot></slot>
      </div>
    </div>

    <div class="controls">
      <SliderControlBtn
        @click="previous"
        text-attractive2
        absolute
        z-1
        translate-y="-5/10"
        left--1.5rem
      >
        <q-icon name="chevron_left" size="2rem" />
      </SliderControlBtn>
      <SliderControlBtn
        @click="next"
        text-attractive2
        absolute
        z-1
        translate-y="-5/10"
        right--1.5rem
      >
        <q-icon name="chevron_right" size="2rem" />
      </SliderControlBtn>
    </div>

    <div sm:mt-2 mt-1 z-1 relative>
      <SliderDownControls :count="stepCount" v-model:current="currentIndex" />
    </div>
  </div>
</template>
