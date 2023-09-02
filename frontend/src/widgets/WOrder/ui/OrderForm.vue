<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { FForm } from 'features/FForm';
import { fieldsSchema } from '../model';

const { t } = useI18n();
const fields = fieldsSchema(t);
</script>

<template>
  <div bg-primary px-12 py-8 rounded-4>
    <div font-800 text-4.4 line-height-5.72 text-center>
      <span text-secondary2>{{ $t('order.desc') + ' ' }}</span> <br />
      <span text-attractive2>{{ $t('order.highlighted') }}</span>
    </div>
    <FForm :fields="fields" />
  </div>
</template>
