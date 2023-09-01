<script setup lang="ts">
import { SLogo } from 'shared/ui/SLogo';
import { SPhoneNumber, PhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';

const numbers: PhoneNumber[] = [
  { grayPart: '8 (916) ', whitePart: '848-86-23' },
  { grayPart: '8 (965) ', whitePart: '356-02-49' },
];
</script>

<template>
  <q-header class="w-header" bg-unset fixed>
    <SStructure py-5.8 flex flex-row justify-between items-center>
      <SLogo />
      <SPhoneNumber :numbers="numbers" />
    </SStructure>
    <img
      src="/widgets/WHeader/background.svg"
      h-32
      absolute
      top-0
      z--1
      bottom-drop-shadow
      select-none
      pointer-events-none
      class="2xl:(object-cover w-full)"
    />
  </q-header>
</template>
