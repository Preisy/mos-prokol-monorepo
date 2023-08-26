<script setup lang="ts">
import { WAboutUs } from 'widgets/WAboutUs';
import { WAdvances } from 'widgets/WAdvances';
import { WHeader } from 'widgets/WHeader';
import { WHome } from 'widgets/WHome';
import { WOurServices } from 'widgets/WOurServices';
import { WOurWorks } from 'widgets/WOurWorks';
import { WPrice } from 'widgets/WPrice';
</script>

<template>
  <WHeader></WHeader>
  <WHome />
  <WAboutUs></WAboutUs>
  <WOurServices />
  <WPrice></WPrice>
  <WAdvances></WAdvances>
  <WOurWorks></WOurWorks>
</template>
