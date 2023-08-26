<script setup lang="ts"></script>

<template>
  <div inline-block uppercase relative class="s-pretty-header">
    <h1 class="main" font-700 relative z-1 text-black text-xl>
      <slot></slot>
    </h1>
    <h1
      class="secondary"
      text-black
      text-outline-attractive2
      text-14
      font-700
      blur-1
      absolute
      left-8
      top--14
      whitespace-nowrap
    >
      <slot></slot>
    </h1>
  </div>
</template>
