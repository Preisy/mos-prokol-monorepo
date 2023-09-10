<script setup lang="ts">
export interface PhoneNumber {
  grayPart: string;
  whitePart: string;
  href: string;
}

defineProps<{
  numbers: PhoneNumber[];
}>();
</script>

<template>
  <div text-base flex items-start>
    <!-- <q-icon name="call" inline-block mr-1 /> -->
    <img
      src="/shared/SPhoneNumber/phone.svg"
      h-14px
      sm:h-16px
      md:h-20px
      inline-block
      mr-1
    />
    <div flex flex-col>
      <a
        v-for="number in numbers"
        :key="number.grayPart + number.whitePart"
        :href="number.href"
        decoration-none
      >
        <span text-gray font-500> {{ number.grayPart }}</span>
        <span text-white font-700>{{ number.whitePart }}</span>
      </a>
    </div>
  </div>
</template>
