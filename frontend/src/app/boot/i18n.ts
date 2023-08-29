import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TAboutUsI18n } from 'widgets/WAboutUs';
import { TAdvancesI18n } from 'widgets/WAdvances';
import { THeaderI18n } from 'widgets/WHeader';
import { THomeI18n } from 'widgets/WHome';
import { TOrderI18n } from 'widgets/WOrder';
import { TOurServices } from 'widgets/WOurServices';
import { TOurWorksI18n } from 'widgets/WOurWorks';
import { TPriceI18n } from 'widgets/WPrice/i18n';
import { TStagesI18n } from 'widgets/WStages';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages: mergeI18n(
      THeaderI18n,
      THomeI18n,
      TAboutUsI18n,
      TAdvancesI18n,
      TOrderI18n,
      TOurServices,
      TPriceI18n,
      TOurWorksI18n,
      TStagesI18n
    ),
    fallbackLocale: 'ru-RU',
  });

  // Set i18n instance on app
  app.use(i18n);
});
