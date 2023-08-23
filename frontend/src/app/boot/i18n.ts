import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { TStagesI18n } from 'widgets/WStages';
import { mergeI18n } from 'shared/api/i18utils';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages: mergeI18n(TStagesI18n),
  });

  // Set i18n instance on app
  app.use(i18n);
});
