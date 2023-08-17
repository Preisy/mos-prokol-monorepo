import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { THeader } from 'widgets/Header';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages: mergeI18n(THeader),
  });

  // Set i18n instance on app
  app.use(i18n);
});
