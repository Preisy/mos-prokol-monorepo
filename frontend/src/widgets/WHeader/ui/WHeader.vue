<script setup lang="ts">
import { SLogo } from 'shared/ui/SLogo';
import { SStructure } from 'shared/ui/SStructure';
import HeaderLink from './HeaderLink.vue';
import PhoneNumber from './PhoneNumber.vue';

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
  <q-header class="w-header" bg-unset fixed>
    <SStructure py-5.8 flex flex-row justify-between items-center>
      <SLogo />
      <div>
        <HeaderLink mx-2.8 v-for="link of links" :key="link">
          {{ $t(`header.routes.${link}`) }}
        </HeaderLink>
      </div>
      <PhoneNumber gray-part="8 (921) " white-part="565 43 88" />
    </SStructure>
    <q-img
      src="/widgets/WHeader/background.svg"
      h-28
      absolute
      top-0
      z--1
      bottom-drop-shadow
    ></q-img>
  </q-header>
</template>
