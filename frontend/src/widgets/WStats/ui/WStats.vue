<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SLogo } from 'shared/ui/SLogo';
import { SPrettyHeader } from 'shared/ui/SPrettyHeader';
import { SStructure } from 'shared/ui/SStructure';
import StatLine, { StatLineProps } from './StatLine.vue';

const { tm } = useI18n();
const q = useQuasar();
const lines = tm('stats.lines') as StatLineProps[];
const brInitWidth = computed(() =>
  q.screen.lt.sm ? 150 : q.screen.lt.md ? 180 : 300
);
const brDelta = computed(() =>
  q.screen.lt.sm ? 50 : q.screen.lt.md ? 50 : 100
);
</script>

<template>
  <div class="w-stats" bg-gradient-light relative overflow-hidden>
    <SStructure py-9.6 sm:py-13 relative z-1>
      <div>
        <template v-for="(line, index) of lines" :key="index">
          <StatLine v-bind="line" />
          <div
            v-if="index !== lines.length - 1"
            :style="{ width: `${brInitWidth + index * brDelta}px` }"
            block
            border-solid
            border-1px
            border-secondary4
            h-1px
          />
        </template>
      </div>
      <div>
        <SPrettyHeader
          set-shadow-color-secondary4
          class="[&>.main]:text-secondary4 [&>.secondary]:(text-primary4 set-shadow-color-secondary4)"
        >
          {{ $t('stats.header') }}
        </SPrettyHeader>
      </div>
      <div
        absolute
        left-10rem
        xl:left-auto
        right="-2/10"
        top--1px
        w-auto
        h="1.01/1"
        z--1
        class="2sm:left-6/10 md:left-5/10"
      >
        <img
          src="/mos-prokol-monorepo/widgets/WStats/background2.png"
          h-full
          select-none
          pointer-events-none
        />
        <SLogo
          absolute
          top="5/10"
          left="5/10"
          translate="-5/10"
          w-16
          sm:w-26
          md:w-40
          xl:w-64
        />
      </div>
    </SStructure>
    <div
      class="md:display-block 4xl:left-65%"
      display-none
      absolute
      left="7/10"
      top-0
      bottom-0
      right-0
      bg-secondary5
      z-0
    />
  </div>
</template>
