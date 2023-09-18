<script setup lang="ts">
import { SLogo } from 'shared/ui/SLogo';
import { SPhoneNumber, PhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';

const numbers: PhoneNumber[] = [
  { grayPart: '8 (916) ', whitePart: '848-86-23', href: 'tel:89168488623' },
  { grayPart: '8 (965) ', whitePart: '356-02-49', href: 'tel:89168488623' },
];
</script>

<template>
  <q-header class="w-header" bg-unset fixed>
    <SStructure
      py-5.8
      pt-4
      md:w-auto
      md:ml-6rem
      md:mr-5rem
      flex
      flex-row
      justify-between
      items-center
      class="4xl:(mx-auto)"
    >
      <SLogo w-16.4 class="2xl:w-24" />
      <SPhoneNumber :numbers="numbers" />
    </SStructure>
    <img
      src="widgets/WHeader/background.svg"
      h-24
      left="-2/10"
      md:left-auto
      md:h-32
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
