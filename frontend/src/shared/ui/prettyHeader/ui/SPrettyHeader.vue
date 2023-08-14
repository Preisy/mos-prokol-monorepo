<script setup lang="ts"></script>

<template>
  <div inline-block uppercase relative>
    <h1 text-xl font-700 text-white relative z-1><slot></slot></h1>
    <h1
      font-700
      text-black
      absolute
      left-8
      top--14
      whitespace-nowrap
      class="outlined"
    >
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.outlined {
  --shadow-color: #ffd743b2;
  filter: blur(1px);
  font-size: 70px;
  text-shadow: -1px -1px 0 var(--shadow-color), 0 -1px 0 var(--shadow-color),
    1px -1px 0 var(--shadow-color), 1px 0 0 var(--shadow-color),
    1px 1px 0 var(--shadow-color), 0 1px 0 var(--shadow-color),
    -1px 1px 0 var(--shadow-color), -1px 0 0 var(--shadow-color);
}
</style>
