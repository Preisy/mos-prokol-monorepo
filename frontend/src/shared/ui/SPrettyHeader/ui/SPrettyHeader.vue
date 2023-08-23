<script setup lang="ts"></script>

<template>
  <div inline-block uppercase relative class="s-pretty-header">
    <h1 text-xl font-700 text-white relative z-1><slot></slot></h1>
    <h1
      font-700
      blur-1
      text-14
      text-black
      absolute
      left-8
      top--14
      whitespace-nowrap
      text-outline-attractive-2
    >
      <slot></slot>
    </h1>
  </div>
</template>
