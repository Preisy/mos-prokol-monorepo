<script setup lang="ts">
import { QDialogProps } from 'quasar';
import { QDialog } from 'quasar';
import { SBtn } from 'shared/ui/SBtn';

interface Props extends QDialogProps {
  text: string;
  buttonText?: string;
}
defineProps<Props>();

const dialog = ref<InstanceType<typeof QDialog>>();
const show = () => {
  console.log('show');
  dialog.value?.show();
};
const hide = () => {
  console.log('hide');
  dialog.value?.hide();
};
defineExpose({ show, hide });
</script>
<template>
  <q-dialog ref="dialog" v-bind="{ ...$props }">
    <div bg-white text-1rem p-1rem text-center rounded="1rem!">
      <p text-1.2rem font-600>{{ text }}</p>
      <SBtn @click="dialog?.hide" v-if="buttonText">{{ buttonText }}</SBtn>
    </div>
  </q-dialog>
</template>
