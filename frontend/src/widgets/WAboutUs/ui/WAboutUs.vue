<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';

const { tm } = useI18n();
</script>
<template>
  <div class="w-about-us" bg-black overflow-hidden relative mt--16>
    <SStructure py-40 relative z-1>
      <SPrettyHeader>{{ $t('about.header') }}</SPrettyHeader>
      <div w="6/10" text-white font-600>
        <div v-for="(line, lineIndex) of tm('about.desc')" :key="lineIndex">
          <span v-html="line"></span>
        </div>
      </div>
    </SStructure>
    <img
      src="/widgets/WAboutUs/background.png"
      absolute
      z-0
      brightness-70
      top--8
      rounded="5/10"
      h="11/10"
      w-auto
      right-0
      translate-x="4/10"
    />
  </div>
</template>

<style scoped lang="scss">
.w-about-us:deep(strong) {
  --uno: text-attractive2;
}
.w-about-us:deep(li::marker) {
  --uno: text-attractive2;
}
</style>
