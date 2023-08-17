<script setup lang="ts"></script>

<template>
  <div relative w-fit h-min text-center inline-block>
    <div
      class="w-9/10 left-5/100 shadow"
      rounded-2
      absolute
      top-1
      h-full
      bg-btnShadow
    />
    <q-btn
      class="btn"
      relative
      z-2
      uppercase
      text-base
      tracking-wider
      font-700
      leading-none
      px-16
      py-4
      rounded-2
      bg-gradient-yellow
      text-btn-text-color
    >
      <slot></slot>
    </q-btn>
  </div>
</template>
