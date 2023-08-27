<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { Form, useField, useForm } from 'vee-validate';
import { z } from 'zod';
import { SBtn } from 'shared/ui/SButton';
import FormInput from './FormInput.vue';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const validationSchema = toTypedSchema(
  z.object({
    telephone: z.string().regex(phoneRegex, 'Неверный номер'),
    question: z.string().min(20, 'Слишком мало').max(2000, 'Слишком много'),
  })
);

const { handleSubmit } = useForm({
  validationSchema,
});
const { value: telephone } = useField<string>('telephone');
const { value: question } = useField<string>('question');
const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <Form bg-primary px-12 py-8 rounded-4 @submit="onSubmit">
    <div font-800 text-4.4 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <div mb-6>
      <div mb-2>
        <FormInput
          v-model="telephone"
          name="telephone"
          title="Телефон"
          mask="# (###) ###-##-##"
        />
      </div>
      <div>
        <FormInput
          v-model="question"
          name="question"
          title="Ваш вопрос"
          type="textarea"
          autocomplete="on"
          resize="none!"
        />
      </div>
    </div>
    <div text-center>
      <SBtn type="submit">{{ $t('order.button') }}</SBtn>
    </div>
  </Form>
</template>
