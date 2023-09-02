<script setup lang="ts">
import { SBtn } from 'shared/ui/SBtn';
import { SLogo } from 'shared/ui/SLogo';
import { PhoneNumber, SPhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';
import FooterLinks from './FooterLinks.vue';

const numbers: PhoneNumber[] = [
  { grayPart: '8 (916) ', whitePart: '848-86-23' },
  { grayPart: '8 (965) ', whitePart: '356-02-49' },
];
</script>

<template>
  <div class="w-footer" relative overflow-hidden bg-black>
    <SStructure w="60/100!" py-18 relative z-1>
      <div flex justify-center gap-x-40>
        <FooterLinks></FooterLinks>
        <div>
          <div flex mb-8 items-center>
            <SLogo mr-4 />
            <span text-neutral-4 text-sm font-500>{{ $t('footer.desc') }}</span>
          </div>

          <div mb-5>
            <SBtn
              text="11px! neutral-6!"
              class="[&>.s-btn\_shadow]:bg-neutral-5! [&>.s-btn\_wrapper>.s-btn\_background]:(bg-neutral bg-none)"
            >
              {{ $t('footer.btn') }}
            </SBtn>
          </div>

          <SPhoneNumber :numbers="numbers" mb-4 text-base />

          <div text-primary3 text-base>
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
      src="/widgets/WFooter/background.png"
      absolute
      h-full
      w-full
      top-0
      z-0
      select-none
      pointer-events-none
    />
  </div>
</template>
