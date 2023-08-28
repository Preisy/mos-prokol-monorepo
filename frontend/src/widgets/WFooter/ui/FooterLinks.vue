<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SNavLink } from 'shared/ui/SNavLink';

const { tm } = useI18n();
const links = tm('footer.links');
</script>

<template>
  <div flex flex-col gap-y-4>
    <SNavLink v-for="link in links" :key="link" text-primary text-base>
      {{ link }}
    </SNavLink>
  </div>
</template>
