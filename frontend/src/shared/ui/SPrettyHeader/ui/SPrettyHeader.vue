<script setup lang="ts"></script>

<template>
  <div uppercase relative>
    <h1 text-xl font-700 text-white relative z-1>
      <slot></slot>
    </h1>
    <h1
      absolute
      font-700
      text-black
      left-8
      whitespace-nowrap
      class="outlined top--15/10 no-select"
    >
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.no-select {
  &::selection {
    all: initial;
    user-select: none;
  }
}
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
