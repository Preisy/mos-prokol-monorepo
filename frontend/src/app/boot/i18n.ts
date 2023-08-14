import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TAdvances } from 'widgets/Advances';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'en-US',
    legacy: false,
    messages: mergeI18n(TAdvances),
  });

  // Set i18n instance on app
  app.use(i18n);
});
