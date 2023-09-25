<script setup lang="ts">
import { WAboutUs } from 'widgets/WAboutUs';
import { WAdvances } from 'widgets/WAdvances';
import { WFooter } from 'widgets/WFooter';
import { WHeader } from 'widgets/WHeader';
import { WHome } from 'widgets/WHome';
import { WOrder } from 'widgets/WOrder';
import { WOurServices } from 'widgets/WOurServices';
import { WOurWorks } from 'widgets/WOurWorks';
import { WPrice } from 'widgets/WPrice';
import { WStages } from 'widgets/WStages';
import { WStats } from 'widgets/WStats';
</script>

<template>
  <q-scroll-area
    bg-secondary5
    h-100vh
    :vertical-thumb-style="{
      mixBlendMode: 'difference',
      opacity: '1',
      zIndex: '2',
      background: 'rgba(255,255,255,0.6)',
    }"
  >
    <WHeader></WHeader>
    <WHome />
    <WAboutUs></WAboutUs>
    <WOurServices />
    <WPrice></WPrice>
    <WAdvances></WAdvances>
    <WOrder></WOrder>
    <WOurWorks></WOurWorks>
    <WStats />
    <WStages />
    <WFooter />
  </q-scroll-area>
</template>
