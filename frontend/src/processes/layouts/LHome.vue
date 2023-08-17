<script setup lang="ts">
import { WAboutUs } from 'widgets/AboutUs';
import { WAdvances } from 'widgets/Advances';
import { WHeader } from 'widgets/Header';
import { WHome } from 'widgets/Home';
</script>

<template>
  <q-layout view="hHh lpr fFf">
    <WHeader></WHeader>
    <WHome />
    <WAboutUs></WAboutUs>
    <WAdvances></WAdvances>
  </q-layout>
</template>
