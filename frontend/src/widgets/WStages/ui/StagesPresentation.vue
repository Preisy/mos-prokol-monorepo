<script setup lang="ts">
import { debounce } from 'quasar';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { StageI18n } from '../i18n';
import DisplayCard from './DisplayCard.vue';
import StageCard from './StageCard.vue';
import StageDisplay from './StageDisplay.vue';

const { tm } = useI18n();

const currentActive = ref(1);
const stagesTextes = tm('stages.data') as Array<StageI18n>;
const cardsRef = ref<HTMLElement>();

const calcHeight = () => {
  if (!cardsRef.value) return;
  return cardsRef.value.getBoundingClientRect().height + 'px';
};
const stageDisplayheight = ref();

onMounted(() => (stageDisplayheight.value = calcHeight()));
window.addEventListener(
  'resize',
  debounce(() => {
    stageDisplayheight.value = calcHeight();
  }, 200)
);
watch(currentActive, () => {
  setTimeout(() => (stageDisplayheight.value = calcHeight()), 200);
});
</script>

<template>
  <div grid grid-cols-34 sm:grid-cols-2 w-fit mx-auto justify-center relative>
    <div
      ref="cardsRef"
      class="cards"
      justify-self-end
      h-min
      grid-col-start-1
      grid-col-end-20
      sm:grid-col-start-auto
      sm:grid-col-end-auto
    >
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
    <div
      w-full
      grid-col-start-20
      grid-col-end-35
      sm:grid-col-start-auto
      sm:grid-col-end-auto
      class="display"
      :style="{ height: stageDisplayheight }"
    >
      <StageDisplay :id="currentActive">
        {{ stagesTextes[currentActive].displayText }}
      </StageDisplay>
    </div>
    <DisplayCard
      v-if="$q.screen.lt.md"
      bottom--1
      translate-y="1/1"
      left-auto
      right-auto
      w-full
      absolute
      py="1.4!"
      px="3!"
      class="[&>p]:text-12px!"
    >
      {{ stagesTextes[currentActive].displayText }}
    </DisplayCard>
  </div>
</template>
