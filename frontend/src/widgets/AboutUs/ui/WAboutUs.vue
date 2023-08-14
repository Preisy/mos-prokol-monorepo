<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/prettyHeader';
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden relative>
    <div class="structure" m-y-50 relative z-1>
      <SPrettyHeader>{{ $t('about.header') }}</SPrettyHeader>
      <div class="descr w-6/10" text-white>
        <div class="chapter" m-b-6>
          {{ $t('about.desc.0') }}
        </div>
        <div class="chapter">
          {{ $t('about.desc.1') }}
        </div>
      </div>
    </div>
    <img
      src="./background.png"
      absolute
      w-280
      z-0
      class="top-15/100 right--80 rounded-5/10 _back"
    />
  </div>
</template>

<style scoped lang="scss">
._back {
  filter: brightness(0.5);
}
</style>
