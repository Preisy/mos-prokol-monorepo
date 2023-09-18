<script setup lang="ts">
export interface AdvanceCardProps {
  mainText: string;
  subText: string;
}
defineProps<AdvanceCardProps>();
</script>

<template>
  <div
    class="md:(px-5 py-7)"
    p-4
    bg-white
    rounded-2
    flex
    flex-col
    justify-between
  >
    <div text-base text-black mb-2 font-500>{{ mainText }}</div>
    <div text-md font-700 text-black uppercase relative overflow-hidden>
      <span class="sm:(ml-4 mt-4)" ml-3 mt-2 z-1 relative block>{{
        subText
      }}</span>
      <div
        bg-attractive
        rounded-1
        h-4.8
        sm:h-6
        w-37
        absolute
        top-0
        left-0
        z-0
      />
    </div>
  </div>
</template>
