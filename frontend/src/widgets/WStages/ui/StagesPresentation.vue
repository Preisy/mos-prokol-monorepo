<script setup lang="ts">
import { ref } from 'vue';
import StageCard from './StageCard.vue';
import StageDisplay from './StageDisplay.vue';

const currentActive = ref(1);
const cardData = new Array(4).fill('');
</script>

<template>
  <div grid grid-cols-2 w-fit mx-auto justify-center>
    <div class="cards">
      <StageCard
        v-for="(card, index) in cardData"
        :key="card"
        :id="index"
        :first="index === 0"
        :last="index === cardData.length - 1"
        v-model:current-index="currentActive"
      />
    </div>
    <div class="display" w-full>
      <StageDisplay />
    </div>
  </div>
</template>
