import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TPriceI18n } from 'widgets/WPrice/i18n';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages: mergeI18n(TPriceI18n),
  });

  // Set i18n instance on app
  app.use(i18n);
});
