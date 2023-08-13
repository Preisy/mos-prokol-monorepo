<script setup lang="ts">
import { SBtn } from 'shared/ui/button';
import WHomeChip from './WHomeChip.vue';
</script>

<template>
  <div class="content-wrapper" overflow-hidden>
    <div structure m-y-70>
      <div class="advances" flex flex-row justify-end>
        <WHomeChip>под ключ</WHomeChip>
        <WHomeChip>от 1100 руб/м</WHomeChip>
      </div>
      <div class="title" text-center>
        <span uppercase text-primary text-xl font-700>
          БЕСТРАНШЕЙНАЯ ПРОКЛАДКА ТРУБ МАЛОГАБАРИТНОЙ УСТАНОВКОЙ
        </span>
      </div>
      <div class="button" text-center m-t-4>
        <SBtn>оставить заявку</SBtn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  background: url('./assets/background.png') no-repeat;
  background-size: cover;
  background-position-x: center;
}
</style>
