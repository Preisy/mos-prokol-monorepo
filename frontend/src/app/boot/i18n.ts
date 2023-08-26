import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TAboutUsI18n } from 'widgets/WAboutUs';
import { TAdvancesI18n } from 'widgets/WAdvances';
import { THeaderI18n } from 'widgets/WHeader';
import { THomeI18n } from 'widgets/WHome';
import { TOurServices } from 'widgets/WOurServices';
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
      TOurServices
    ),
    fallbackLocale: 'ru-RU',
  });

  // Set i18n instance on app
  app.use(i18n);
});
