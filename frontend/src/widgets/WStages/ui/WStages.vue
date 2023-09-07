<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import StagesPresentation from './StagesPresentation.vue';
</script>

<template>
  <div class="w-stages" overflow-hidden relative z-1>
    <SStructure pb-7rem pt-2rem md:py-3.5rem>
      <SPrettyHeader relative left="5/10" translate-x="-5/10">
        {{ $t('stages.header') }}
      </SPrettyHeader>
      <StagesPresentation />
    </SStructure>
  </div>
</template>
