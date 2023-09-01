<script setup lang="ts">
export interface PhoneNumber {
  grayPart: string;
  whitePart: string;
}

defineProps<{
  numbers: PhoneNumber[];
}>();
</script>

<template>
  <div text-base flex items-start>
    <!-- <q-icon name="call" inline-block mr-1 /> -->
    <img src="/shared/SPhoneNumber/phone.svg" inline-block mr-1 />
    <div flex flex-col>
      <div v-for="number in numbers" :key="number.grayPart + number.whitePart">
        <span text-gray font-500> {{ number.grayPart }}</span>
        <span text-white font-700>{{ number.whitePart }}</span>
      </div>
    </div>
  </div>
</template>
