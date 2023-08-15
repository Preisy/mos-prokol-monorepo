import type { Theme } from '@unocss/preset-uno';
import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

export default defineConfig<Theme>({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      unset: 'unset',
      dark: '#1A1A1A',
      primary: '#FCFCFC',
      attractive: '#FCE078',
    },
    fontSize: {
      sm: ['0.7rem', 'normal'],
      base: ['0.9rem', '130%'],
      md: ['1rem', '140%'],
      lg: ['1.5rem', '1.875rem'],
      xl: ['2.5rem', '140%'],
      '2xl': ['6rem', '7.313rem'],
    },
    breakpoints: {
      sm: '450px',
      md: '900px',
      xl: '1280px',
    },
  },
  preflights: [],
  rules: [],
});
