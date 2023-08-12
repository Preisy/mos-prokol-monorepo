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
  preflights: [
    // {
    //   getCSS: ({ theme }) => {
    //     const middlePx = (a: string, b: string) =>
    //       (parseInt(a) + parseInt(b)) / 2 + 'px';
    //     const absDelta = (a: string, b: string) =>
    //       Math.abs(parseInt(a) - parseInt(b));
    //     const { sm: fontSm, md: fontMd, xl: fontXl } = theme.fontSize!;
    //     const { sm, md, xl } = theme.breakpoints!;
    //     return '';
    //   },
    // },
  ],
  rules: [],
});
