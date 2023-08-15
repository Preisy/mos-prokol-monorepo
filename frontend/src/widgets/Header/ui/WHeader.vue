<script setup lang="ts">
import { WLogo } from 'shared/ui/Logo';
import { SStructure } from 'shared/ui/structure';
import WHeaderLink from './WHeaderLink.vue';
import WPhoneNumber from './WPhoneNumber.vue';

const links = [
  'services',
  'price',
  'calculations',
  'photo',
  'stages',
  'contacts',
];
</script>

<template>
  <q-header class="header" bg-unset relative>
    <SStructure p-y-5.8 flex flex-row justify-between items-center>
      <WLogo />
      <div>
        <WHeaderLink m-x-2.8 v-for="link of links" :key="link">
          {{ $t(`header.routes.${link}`) }}
        </WHeaderLink>
      </div>
      <WPhoneNumber number="89215654388" />
    </SStructure>
    <q-img
      class="background"
      src="./assets/background.svg"
      h-28
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
