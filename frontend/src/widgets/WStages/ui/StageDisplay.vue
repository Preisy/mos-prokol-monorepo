<script setup lang="ts">
import DisplayCard from './DisplayCard.vue';

const props = defineProps<{
  id: number;
}>();
const imgUrl = computed(() => `/widgets/WStages/${props.id}.png`);
</script>

<template>
  <div w-full h-full relative>
    <q-img :src="imgUrl" w-full h-full rounded-tr-2.4 rounded-br-2.4 />
    <DisplayCard
      v-if="!$q.screen.lt.md"
      absolute
      bottom--1.5rem
      left-auto
      right-auto
      mx-4
    >
      <slot></slot>
    </DisplayCard>
  </div>
</template>
