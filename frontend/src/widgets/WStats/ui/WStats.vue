<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import StatLine, { StatLineProps } from './StatLine.vue';

const { tm } = useI18n();
const lines = tm('stats.lines') as StatLineProps[];
</script>

<template>
  <div class="w-stats" bg-gradient-light relative overflow-hidden>
    <SStructure py-13 relative z-1>
      <div>
        <template v-for="(line, index) of lines" :key="index">
          <StatLine v-bind="line" />
          <div
            v-if="index !== lines.length - 1"
            :style="{ width: `${300 + index * 100}px` }"
            block
            border-solid
            border-1px
            border-secondary4
            h-1px
          />
        </template>
      </div>
      <div>
        <SPrettyHeader class="header">{{ $t('stats.header') }}</SPrettyHeader>
      </div>
    </SStructure>
    <img
      src="/widgets/WStats/background.png"
      absolute
      right-0
      top--1px
      w="6.1/10"
      h="1.01/1"
      z-0
    />
  </div>
</template>

<style scoped lang="scss">
.header {
  &:deep(.main) {
    --uno: text-secondary4;
  }
  &:deep(.secondary) {
    color: rgb(239, 238, 234);
    --shadow-color: #313131;
  }
}
</style>
