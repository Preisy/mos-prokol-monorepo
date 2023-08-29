<script setup lang="ts">
import { SLogo } from 'shared/ui/SLogo';
import { SNavLink } from 'shared/ui/SNavLink';
import { SPhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';

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
        <SNavLink mx-2.8 v-for="link of links" :key="link">
          {{ $t(`header.routes.${link}`) }}
        </SNavLink>
      </div>
      <SPhoneNumber gray-part="8 (921) " white-part="565 43 88" />
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
