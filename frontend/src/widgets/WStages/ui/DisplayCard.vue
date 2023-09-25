<script setup lang="ts"></script>

<template>
  <div
    bg-primary
    rounded-2
    px-6.4
    py-3.6
    border-attractive2
    border-l-6
    border-0
    border-style-solid
    :class="{
      'border-l-3! px-3!': $q.screen.lt.sm,
    }"
  >
    <p font-500 text-sm m-0>
      <slot></slot>
    </p>
  </div>
</template>
