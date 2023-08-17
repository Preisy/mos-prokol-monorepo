<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden relative>
    <SStructure my-50 relative z-1>
      <SPrettyHeader>{{ $t('about.header') }}</SPrettyHeader>
      <div class="descr w-6/10" text-white>
        <div class="chapter" mb-6>
          {{ $t('about.desc.0') }}
        </div>
        <div class="chapter">
          {{ $t('about.desc.1') }}
        </div>
      </div>
    </SStructure>
    <img
      src="./background.png"
      absolute
      w-280
      z-0
      brightness-50
      right--80
      class="top-15/100 rounded-5/10"
    />
  </div>
</template>
