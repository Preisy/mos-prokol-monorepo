<script setup lang="ts">
import DisplayCard from './DisplayCard.vue';
</script>

<template>
  <div h-full w-fit overflow-hidden rounded-tr-2.4 rounded-br-2.4 relative>
    <img w-auto h-full src="https://loremflickr.com/320/240" />
    <DisplayCard absolute bottom-8 left-auto right-auto mx-4></DisplayCard>
  </div>
</template>
