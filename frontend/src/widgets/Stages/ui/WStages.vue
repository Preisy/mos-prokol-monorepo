<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/prettyHeader';
import { SStructure } from 'shared/ui/structure';
import WStagesPresentation from './WStagesPresentation.vue';
</script>

<template>
  <div class="content-wrapper" bg-black overflow-hidden>
    <SStructure m-y-10>
      <SPrettyHeader>этапы работ</SPrettyHeader>
      <WStagesPresentation></WStagesPresentation>
    </SStructure>
  </div>
</template>
