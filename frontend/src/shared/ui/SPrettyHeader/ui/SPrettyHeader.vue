<script setup lang="ts"></script>

<template>
  <div inline-block uppercase relative class="s-pretty-header">
    <h1 text-2xl font-700 text-white relative z-1 class="main">
      <slot></slot>
    </h1>
    <h1
      font-700
      blur-1.5
      text-2xl
      text-secondary5
      absolute
      top-0
      left-0
      translate-x="1/10"
      translate-y="-1.5/10"
      select-none
      pointer-events-none
      whitespace-break-spaces
      sm:whitespace-nowrap
      text-outline-attractive2
      opacity-60
      class="secondary"
    >
      <slot></slot>
    </h1>
  </div>
</template>
