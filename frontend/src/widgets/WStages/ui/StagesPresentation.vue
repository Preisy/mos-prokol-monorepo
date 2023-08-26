<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { StageI18n } from './i18n';
import StageCard from './StageCard.vue';
import StageDisplay from './StageDisplay.vue';

const { tm } = useI18n();

const currentActive = ref(1);
const stagesTextes = tm('stages.data') as Array<StageI18n>;
</script>

<template>
  <div grid grid-cols-2 w-fit mx-auto justify-center>
    <div class="cards">
      <StageCard
        v-for="(stage, index) in stagesTextes"
        :key="index"
        :id="index"
        :first="index === 0"
        :last="index === stagesTextes.length - 1"
        v-model:current-index="currentActive"
      >
        {{ stage.cardText }}
      </StageCard>
    </div>
    <div class="display" w-full>
      <StageDisplay :id="currentActive">
        {{ stagesTextes[currentActive].displayText }}
      </StageDisplay>
    </div>
  </div>
</template>
