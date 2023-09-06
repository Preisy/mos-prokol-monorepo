<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
const points = tm('price.list.points') as string[];
</script>

<template>
  <div>
    <p m-0>{{ $t('price.list.title') }}</p>
    <div
      grid
      grid-rows-4
      sm:grid-rows-2
      sm:grid-cols-2
      mx-1
      sm:mx-2
      md:mx-8
      gap-x-10
    >
      <li v-for="point in points" :key="point" marker:text-attractive2>
        {{ point }}
      </li>
    </div>
  </div>
</template>
