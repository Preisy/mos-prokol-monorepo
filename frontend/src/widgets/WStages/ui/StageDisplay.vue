<script setup lang="ts">
import { QDialog } from 'quasar';
import DisplayCard from './DisplayCard.vue';

const props = defineProps<{
  id: number;
}>();
const imgUrl = computed(() => `/widgets/WStages/${props.id}.png`);
const dialog = ref<InstanceType<typeof QDialog>>();
</script>

<template>
  <div w-full h-full relative @click="dialog?.show()">
    <div cursor-pointer h-full>
      <q-img
        :src="imgUrl"
        w-full
        h-full
        rounded-tr-2.4
        rounded-br-2.4
        select-none
        pointer-events-none
      />
    </div>
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
    <q-dialog ref="dialog">
      <q-img :src="imgUrl" select-none pointer-events-none />
    </q-dialog>
  </div>
</template>
