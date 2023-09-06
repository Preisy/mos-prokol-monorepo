import { ComposerTranslation } from 'vue-i18n';
import { z } from 'zod';
import { FieldSchema } from 'features/FForm';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const fieldsSchema = (t: ComposerTranslation): FieldSchema[] => {
  return [
    {
      name: 'telephone',
      title: 'Телефон',
      rule: z.string().regex(phoneRegex, t('order.errors.telephoneRegexp')),
      sInputOptions: { mask: '# (###) ###-##-##' },
    },
    {
      name: 'question',
      title: 'Ваш вопрос',
      rule: z
        .string()
        .min(6, t('order.errors.questionShort'))
        .max(2000, t('order.errors.questionLong')),
      sInputOptions: { type: 'textarea' },
    },
  ];
};
