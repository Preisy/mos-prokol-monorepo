<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { FForm } from 'features/FForm';
import { fieldsSchema } from '../model';

const { t } = useI18n();
const fields = fieldsSchema(t);
</script>

<template>
  <div class="sm:(px-12 py-8)" p-7 bg-primary rounded-4>
    <div class="sm:text-24px" text-18px font-800 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <FForm :fields="fields" class="order-form" />
  </div>
</template>

<style scoped lang="scss">
.order-form:deep(.q-btn.f-form_btn) {
  --py: 0.4rem;
  padding-top: var(--py);
  padding-bottom: var(--py);
}
</style>
