<script setup lang="ts">
import { scrollToElement } from 'shared/api/SmoothScrollUtils';
import { SBtn } from 'shared/ui/SBtn';
import { SLogo } from 'shared/ui/SLogo';
import { PhoneNumber, SPhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';
import FooterLinks from './FooterLinks.vue';

const numbers: PhoneNumber[] = [
  { grayPart: '8 (965) ', whitePart: '356-02-49', href: 'tel:89653560249' },
  { grayPart: '8 (916) ', whitePart: '848-86-23', href: 'tel:89168488623' },
];

const targetElement = ref<HTMLElement>();
const onclick = () => {
  if (!targetElement.value) return;
  scrollToElement(targetElement.value);
};
onMounted(
  () => (targetElement.value = <HTMLElement>document.querySelector('.w-order'))
);
</script>

<template>
  <div class="w-footer" relative overflow-hidden mt--1rem>
    <SStructure sm:w="60/100!" mx-auto py-8.8 pb-12 sm:py-18 relative z-1>
      <div flex flex-col md:flex-row items-center justify-center gap-x-40>
        <FooterLinks></FooterLinks>
        <div mt-4 md:mt-0>
          <div flex flex-col md:flex-row mb-10 items-center>
            <SLogo md:mr-4 w-7rem md:w-6rem />
            <span v-if="!$q.screen.lt.md" text-neutral-4 text-sm font-500>{{
              $t('footer.desc')
            }}</span>
          </div>

          <div mb-1.75rem md:mb-5>
            <SBtn
              @click="onclick"
              text="11px! neutral-6!"
              class="[&>.s-btn\_shadow]:bg-neutral-5! [&>.s-btn\_wrapper>.s-btn\_background]:(bg-neutral bg-none)"
            >
              {{ $t('footer.btn') }}
            </SBtn>
          </div>

          <SPhoneNumber
            :numbers="numbers"
            mb-4
            text-base
            justify-center
            md:justify-start
          />

          <div text-primary3 text-base text-center md:text-start>
            <span font-700>
              {{ $t('footer.addressTitle') + ' ' }}
            </span>
            <span>{{ $t('footer.address') }}</span>
          </div>
        </div>
      </div>
    </SStructure>
    <div
      absolute
      bottom-6
      text-center
      text-sm
      text-neutral-4
      font-500
      z-1
      w-full
    >
      <span>{{ $t('footer.copyright') }}</span>
    </div>
    <img
      src="widgets/WFooter/background.png"
      absolute
      w-auto
      md:w-full
      h-full
      top-0
      left="5/10"
      translate-x="-7/10"
      md:translate-0
      md:left-auto
      z-0
      select-none
      pointer-events-none
    />
  </div>
</template>
