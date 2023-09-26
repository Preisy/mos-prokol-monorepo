<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { FForm } from 'features/FForm';
import { OrderDto, sendOrder } from 'shared/api/services';
import { SArrow } from 'shared/ui/SArrow';
import { fieldsSchema } from '../model';

const { t } = useI18n();
const fields = fieldsSchema(t);
const onclickAction = (values: Record<string, unknown>) => {
  const data = values as unknown as OrderDto;
  console.log(data);
  sendOrder(data);
};
</script>

<template>
  <div class="sm:(px-12 py-8)" p-7 bg-primary rounded-4 relative>
    <div
      class="md:text-24px"
      text-18px
      font-800
      line-height-5.72
      text-center
      mb-0.45rem
    >
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span italic text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <FForm
      input-classes="text-neutral-5/95 pt-9px! ml-12px! md:ml-16px!"
      :action="onclickAction"
      :fields="fields"
      class="order-form"
      :class="{ mobile: $q.screen.lt.md }"
    />
    <SArrow
      absolute
      w-6.5rem
      bottom-0
      left="5/10"
      z-2
      translate-y="5.3/10"
      class="md-(translate-y--47% rotate-290deg right--4.7rem left-auto w-8.5rem)"
    />
  </div>
</template>

<style scoped lang="scss">
.order-form {
  --telephone-height: 2.5rem;
  --question-height: 5.5rem;
  --btn-py: 1.1rem;

  &.mobile {
    --telephone-height: 2rem;
    --question-height: 4rem;
    --btn-py: 0.6rem;
  }

  &:deep(.s-btn) {
    width: 100%;
  }
  &:deep(.q-btn.f-form_btn) {
    width: 100%;
    padding: 0;
    padding-top: var(--btn-py);
    padding-bottom: var(--btn-py);
  }

  &:deep(.telephone.q-field) {
    height: var(--telephone-height);
  }
  &:deep(.telephone .q-field__control) {
    height: var(--telephone-height);
  }

  &:deep(.question.q-field) {
    height: var(--question-height);
  }
  &:deep(.question .q-field__control) {
    height: var(--question-height);
  }
}
</style>
