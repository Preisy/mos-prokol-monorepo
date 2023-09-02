<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useI18n } from 'vue-i18n';
import { z } from 'zod';
import { SBtn } from 'shared/ui/SBtn';
import { SInput } from 'shared/ui/SInput';

const { t } = useI18n();

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const validationSchema = toTypedSchema(
  z.object({
    telephone: z.string().regex(phoneRegex, t('order.errors.telephoneRegexp')),
    question: z
      .string()
      .min(20, t('order.errors.questionShort'))
      .max(2000, t('order.errors.questionLong')),
  })
);
// const validationSchema = toTypedSchema(
//   z.object({
//     telephone: z.string().optional(),
//     question: z.string().optional(),
//   })
// );

const { handleSubmit } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form bg-primary px-12 py-8 rounded-4 @submit="onSubmit">
    <div font-800 text-4.4 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <div mb-6>
      <div mb-2>
        <SInput
          name="telephone"
          :title="$t('order.fields.telephone')"
          mask="# (###) ###-##-##"
        />
      </div>
      <div>
        <SInput
          name="question"
          :title="$t('order.fields.question')"
          type="textarea"
          autocomplete="on"
          resize="none!"
        />
      </div>
    </div>
    <div text-center>
      <SBtn type="submit">{{ $t('order.button') }}</SBtn>
    </div>
  </form>
</template>
