<script setup lang="ts">
import { SLogo } from 'shared/ui/SLogo';
import { SPhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';
</script>

<template>
  <q-header class="w-header" bg-unset fixed>
    <SStructure py-5.8 flex flex-row justify-between items-center>
      <SLogo />
      <SPhoneNumber gray-part="8 (916) " white-part="848-86-23" />
    </SStructure>
    <img
      src="/widgets/WHeader/background.svg"
      h-32
      absolute
      top-0
      z--1
      bottom-drop-shadow
      class="2xl:(object-cover w-full)"
    />
  </q-header>
</template>
