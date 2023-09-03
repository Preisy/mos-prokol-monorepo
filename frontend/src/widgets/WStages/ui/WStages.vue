<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import StagesPresentation from './StagesPresentation.vue';
</script>

<template>
  <div class="w-stages" bg-black overflow-hidden>
    <SStructure pb-7rem md:py-3.5rem>
      <SPrettyHeader>{{ $t('stages.header') }}</SPrettyHeader>
      <StagesPresentation />
    </SStructure>
  </div>
</template>
