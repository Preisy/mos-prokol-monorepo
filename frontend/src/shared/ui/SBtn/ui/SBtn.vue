<script setup lang="ts">
import { QBtnProps } from 'quasar';

interface SBtnProps extends QBtnProps {
  btnClasses?: string;
}
defineProps<SBtnProps>();
</script>

<template>
  <div class="s-btn" relative w-fit h-min text-center inline-block>
    <div
      class="s-btn_shadow"
      w="9/10"
      left="5/100"
      rounded-2
      absolute
      top-1
      h-full
      bg-btnShadow
      z-0
    />
    <div
      class="s-btn_wrapper"
      overflow-hidden
      w-full
      h-full
      relative
      rounded-1.6
    >
      <div
        class="s-btn_background"
        absolute
        top="5/10"
        left-0
        translate-y="-5/10"
        rounded="5/10"
        w-full
        h="5/1"
        z-0
        bg-gradient-yellow
      />
      <q-btn
        v-bind="{ ...$attrs, ...$props }"
        relative
        z-2
        uppercase
        text-base
        tracking-wider
        font-700
        leading-none
        px-16
        py-4
        text-btn-text-color
        :class="btnClasses"
        class="s-btn_btn"
      >
        <slot></slot>
      </q-btn>
    </div>
  </div>
</template>
