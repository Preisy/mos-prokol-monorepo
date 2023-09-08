<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { FForm } from 'features/FForm';
import { SArrow } from 'shared/ui/SArrow';
import { fieldsSchema } from '../model';

const { t } = useI18n();
const fields = fieldsSchema(t);
</script>

<template>
  <div class="sm:(px-12 py-8)" p-7 bg-primary rounded-4 relative>
    <div class="sm:text-24px" text-18px font-800 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span italic text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <FForm
      input-classes="text-neutral-5/95 pt-6px!"
      :fields="fields"
      class="order-form"
    />
    <SArrow
      absolute
      w-6.5rem
      bottom-0
      left="5/10"
      z-2
      translate-y="5.3/10"
      class="md-(translate-y--47% rotate-290deg right--2.8rem left-auto w-8.5rem)"
    />
  </div>
</template>

<style scoped lang="scss">
.order-form:deep(.q-btn.f-form_btn) {
  --py: 0.4rem;
  padding-top: var(--py);
  padding-bottom: var(--py);
}
</style>
