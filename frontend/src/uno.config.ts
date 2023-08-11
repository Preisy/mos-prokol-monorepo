import type { Theme } from '@unocss/preset-uno';
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {},
      extraProperties: {
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      bg: '#FFF',
      primary: '#4F62E5',
      secondary: '#6BDA97',
      tertiary: '#666666',
    },
    fontSize: {
      sm: ['1.25rem', '1.56rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.5rem', '1.875rem'],
      xl: ['3rem', '3.657rem'],
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
