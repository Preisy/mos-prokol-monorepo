<script setup lang="ts">
import { ref } from 'vue';
import WDisplay from './WDisplay.vue';
import WStageCard from './WStageCard.vue';

const currentActive = ref(1);
const cardData = new Array(4).fill('');
</script>

<template>
  <div flex flex-row justify-center>
    <div class="cards">
      <WStageCard
        v-for="(card, index) in cardData"
        :key="card"
        :id="index"
        :first="index === 0"
        :last="index === cardData.length - 1"
        v-model:current-index="currentActive"
      ></WStageCard>
    </div>
    <div class="display" w-full>
      <WDisplay></WDisplay>
    </div>
  </div>
</template>
