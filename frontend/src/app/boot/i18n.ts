import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TOurServices } from 'widgets/OurServices';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages: mergeI18n(TOurServices),
  });

  // Set i18n instance on app
  app.use(i18n);
});
