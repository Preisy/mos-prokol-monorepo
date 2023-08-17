<script setup lang="ts">
export interface AdvanceCardProps {
  mainText: string;
  subText: string;
}
defineProps<AdvanceCardProps>();
</script>

<template>
  <div bg-white rounded-2 p-x-5 p-y-7 flex flex-col justify-between>
    <div text-base text-black m-b-8>{{ mainText }}</div>
    <div text-md font-700 text-black uppercase bg-attractive rounded-1>
      {{ subText }}
    </div>
  </div>
</template>
