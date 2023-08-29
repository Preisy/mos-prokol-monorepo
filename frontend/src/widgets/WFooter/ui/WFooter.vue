<script setup lang="ts">
import { SBtn } from 'shared/ui/SButton';
import { SLogo } from 'shared/ui/SLogo';
import { SPhoneNumber } from 'shared/ui/SPhoneNumber';
import { SStructure } from 'shared/ui/SStructure';
import FooterLinks from './FooterLinks.vue';
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
            <SBtn text="11px!" class="btn">{{ $t('footer.btn') }}</SBtn>
          </div>

          <SPhoneNumber
            mb-4
            gray-part="8 (916)"
            white-part="848-86-23"
            text-base
          />

          <div flex flex-col text-primary3>
            <span text-base font-700>
              {{ $t('footer.addressTitle') }}
            </span>
            <span text-sm>{{ $t('footer.address') }}</span>
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
    />
  </div>
</template>

<style scoped lang="scss">
.btn {
  &:deep(.s-btn_background) {
    background: #a1a1a1;
  }
  &:deep(.s-btn_btn) {
    color: #575757;
  }
  &:deep(.s-btn_shadow) {
    background: #777;
  }
}
</style>
