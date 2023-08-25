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
      primary: '#FCFCFC',
      secondary: '#1A1A1A',
      attractive: '#FCE078',
      attractive2: '#ffd743',
      btnTextColor: '#574c1f',
      btnShadow: '#e7c02f',
      shadowing: '#1C1A15',
    },
    fontSize: {
      sm: ['0.7rem', 'normal'],
      base: ['0.9rem', '1.3'],
      md: ['1rem', '1.4'],
      lg: ['1.5rem', '1.875rem'],
      xl: ['2.5rem', '1.4'],
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
