<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { z, Schema } from 'zod';
import { SBtn } from 'shared/ui/SBtn';
import { SInput, SInputProps } from 'shared/ui/SInput';

export interface FieldSchema {
  title: string;
  name: string;
  rule: Schema;
  sInputOptions?: Omit<SInputProps, 'title' | 'name'>;
}

export type FieldsSchema = FieldSchema[];

const props = defineProps<{
  fields: FieldSchema[];
  inputClasses?: string;
}>();

const validationSchema = toTypedSchema(
  z.object(
    props.fields.reduce(
      (all, currentField) => ({
        ...all,
        [currentField.name]: currentField.rule,
      }),
      {}
    )
  )
);

const { handleSubmit } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form class="f-form" @submit="onSubmit">
    <div>
      <div
        v-for="({ name, title, sInputOptions }, index) in fields"
        :key="name"
        class="f-form_input-wrapper"
        :class="{ 'mb-1.1rem!': index === fields.length - 1 }"
        mb-2
      >
        <SInput
          class="f-form_input"
          :class="name"
          :input-class="inputClasses"
          :name="name"
          :title="title"
          v-bind="sInputOptions"
          resize="none!"
        />
      </div>
    </div>
    <div text-center>
      <SBtn class="f-form_btn" type="submit">
        {{ $t('order.button') }}
      </SBtn>
    </div>
  </form>
</template>
