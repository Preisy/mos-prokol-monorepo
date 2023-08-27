<script setup lang="ts">
import { ref } from 'vue';
import { SBtn } from 'shared/ui/SButton';
import FormInput from './FormInput.vue';

const telephone = ref<string>();
const question = ref<string>();
</script>

<template>
  <div bg-primary px-12 py-8 rounded-4>
    <div font-800 text-4.4 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <div mb-6>
      <div mb-2>
        <FormInput
          title="Телефон"
          v-model="telephone"
          mask="# (###) ###-##-##"
        />
      </div>
      <div>
        <FormInput
          title="Ваш вопрос"
          v-model="question"
          type="textarea"
          autocomplete="on"
          resize="none!"
        />
      </div>
    </div>
    <div text-center>
      <SBtn>{{ $t('order.button') }}</SBtn>
    </div>
  </div>
</template>
