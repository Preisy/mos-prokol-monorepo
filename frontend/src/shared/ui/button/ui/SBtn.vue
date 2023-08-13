<script setup lang="ts"></script>

<template>
  <div relative w-fit h-min text-center inline-block>
    <!-- <img src="./background.svg" absolute /> -->
    <div class="w-9/10 left-5/100 shadow" rounded-2 absolute top-1 h-full />
    <q-btn
      class="btn"
      uppercase
      text-base
      tracking-wider
      font-700
      leading-none
      p-x-16
      p-y-4
      rounded-2
    >
      <slot></slot>
    </q-btn>
  </div>
</template>

<style scoped lang="scss">
.btn {
  background: linear-gradient(180deg, #fceb91 0%, #ffd743 100%);

  color: #574c1f;
  position: relative;
  z-index: 2;
  //   background: url('./background.svg') no-repeat;
  //   background-position: center;
  //   background-size: 100% 100%;

  //   width: 100%;
}
.shadow {
  background: #e7c02f;
}
</style>
