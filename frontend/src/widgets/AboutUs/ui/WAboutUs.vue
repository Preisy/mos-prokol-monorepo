<script setup lang="ts">
import { SPrettyHeader } from 'shared/ui/prettyHeader';
</script>
<template>
  <div class="content-wrapper" bg-black overflow-hidden relative>
    <div class="structure" m-y-50 relative z-1>
      <SPrettyHeader>о нас</SPrettyHeader>
      <div class="descr w-6/10" text-white>
        <div class="chapter" m-b-6>
          Производим прокладку инженерных коммуникаций, таких как: силовые
          электрические кабели, кабели связи и доступа в интернет, трубопроводы
          для подачи воды, газа, отопления, канализационные трубы и т.д.
          закрытым способом (бестраншейным бурением), с помощью компактной
          установки горизонтально-направленного бурения.
        </div>
        <div class="chapter">
          Полный спектр услуг для реализации вашего проекта под ключ - по
          необходимости купим и привезем на объект необходимые материалы, а
          также произведем монтаж. Даем гарантию на выполненные работы.
        </div>
      </div>
    </div>
    <img
      src="./background.png"
      absolute
      w-280
      z-0
      class="top-15/100 right--80 rounded-5/10 _back"
    />
  </div>
</template>

<style scoped lang="scss">
._back {
  filter: brightness(0.5);
}
</style>
