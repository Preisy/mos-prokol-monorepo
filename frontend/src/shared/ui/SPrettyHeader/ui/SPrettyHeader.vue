<script setup lang="ts"></script>

<template>
  <div inline-block uppercase relative class="s-pretty-header">
    <h1 text-12 font-700 text-white relative z-1 class="main"><slot></slot></h1>
    <h1
      font-700
      blur-1
      text-12
      text-black
      absolute
      left-4
      top--4
      select-none
      whitespace-nowrap
      text-outline-attractive2
      class="secondary"
    >
      <slot></slot>
    </h1>
  </div>
</template>
