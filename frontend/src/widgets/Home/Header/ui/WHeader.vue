<script setup lang="ts">
import { SStructure } from 'shared/ui/structure';
import { WLogo } from 'widgets/Home/Logo';
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
    <SStructure p-y-5.8>
      <WLogo m-r-18 />
      <div inline-block>
        <WHeaderLink m-x-2.8 v-for="link of links" :key="link">
          {{ $t(`header.routes.${link}`) }}
        </WHeaderLink>
      </div>
      <WPhoneNumber number="89215654388" inline-block />
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
