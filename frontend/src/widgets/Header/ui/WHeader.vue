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
  <q-header class="header" bg-unset fixed>
    <SStructure py-5.8 flex flex-row justify-between items-center>
      <WLogo />
      <div>
        <WHeaderLink mx-2.8 v-for="link of links" :key="link">
          {{ $t(`header.routes.${link}`) }}
        </WHeaderLink>
      </div>
      <WPhoneNumber number="89215654388" />
    </SStructure>
    <q-img
      src="./assets/background.svg"
      h-28
      absolute
      top-0
      z--1
      bottom-drop-shadow
    ></q-img>
  </q-header>
</template>
