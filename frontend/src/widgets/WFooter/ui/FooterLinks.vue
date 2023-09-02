<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SNavLink } from 'shared/ui/SNavLink';

const { tm } = useI18n();
const links = tm('footer.links') as Array<string>;
const linksSelectors = [
  '.w-about-us',
  '.w-our-services',
  '.w-price',
  '.w-advances',
  '.w-order',
  '.w-our-works',
  '.w-stages',
];
if ((links as Array<string>).length !== linksSelectors.length)
  throw new Error('links.length !== selectors.length');
</script>

<template>
  <div flex flex-col gap-y-4>
    <SNavLink
      v-for="(link, index) in links"
      :key="link"
      :target-selector="linksSelectors[index]"
      text-primary
      text-base
    >
      {{ link }}
    </SNavLink>
  </div>
</template>
