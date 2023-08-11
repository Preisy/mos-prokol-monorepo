<script setup lang="ts">
import { SStructure } from 'shared/ui/structure';
import { WLogo } from 'widgets/Home/Logo';
</script>

<template>
  <q-header class="header" bg-unset relative>
    <SStructure p-y-5.8>
      <WLogo />
      <span text-sm m-x-3>A</span>
      <span text-sm m-x-3>B</span>
      <span text-sm m-x-3>C</span>
    </SStructure>
    <q-img
      class="background"
      src="./assets/background.svg"
      absolute
      top-0
      z--1
    ></q-img>
  </q-header>
</template>

<style scoped lang="scss">
.background {
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.3));
}
</style>
