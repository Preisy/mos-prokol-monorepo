<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import { SStructure } from 'shared/ui/structure';
import StagesPresentation from './StagesPresentation.vue';
</script>

<template>
  <div class="w-stages" bg-black overflow-hidden>
    <SStructure my-10>
      <SPrettyHeader>{{ $t('stages.header') }}</SPrettyHeader>
      <StagesPresentation />
    </SStructure>
  </div>
</template>
