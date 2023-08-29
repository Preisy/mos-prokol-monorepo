import type { Theme } from '@unocss/preset-uno';
import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
  toEscapedSelector,
} from 'unocss';

export default defineConfig<Theme>({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    fontFamily: {
      monsterrat: 'Montserrat, sans-serif',
      inter: 'Inter, sans-serif',
    },
    colors: {
      unset: 'unset',
      primary: '#FCFCFC',
      secondary: '#1A1A1A',
      secondary2: '#3A3A3A',
      secondary3: '#C9C9C9',
      secondary4: '#313131',
      attractive: '#FCE078',
      attractive2: '#ffd743',
      btnTextColor: '#574c1f',
      btnShadow: '#e7c02f',
      shadowing: '#1C1A15',
      'gradient-light': 'linear-gradient(180deg, #F9F9F9 0%, #E1DED3 100%)',
    },
    fontSize: {
      sm: ['0.7rem', 'normal'],
      base: ['0.9rem', '1.3'],
      md: ['1rem', '1.4'],
      lg: ['1.5rem', '1.875rem'],
      xl: ['2.5rem', '1.4'],
      '2xl': ['3rem', '1.4'],
    },
    breakpoints: {
      sm: '450px',
      md: '900px',
      xl: '1280px',
    },
  },
  preflights: [],
  rules: [
    [
      'bottom-drop-shadow',
      { filter: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.3))' },
    ],
    [
      'bg-gradient-yellow',
      { background: 'linear-gradient(180deg, #fceb91 0%, #ffd743 100%);' },
    ],
    [
      'bg-gradient-shadow',
      {
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.55%, rgba(0, 0, 0, 0.70) 78.97%)',
      },
    ],
    [
      'bg-gradient-light',
      {
        background: 'linear-gradient(180deg, #F9F9F9 0%, #E1DED3 100%)',
      },
    ],
    [
      /^text-outline-(.+)$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, color], { theme, rawSelector }) => {
        const shadowColor = theme.colors?.[color] ?? color;

        return `
        ${toEscapedSelector(rawSelector)} {
          --shadow-color: ${shadowColor};
          text-shadow: -1px -1px 0 var(--shadow-color), 0 -1px 0 var(--shadow-color),
          1px -1px 0 var(--shadow-color), 1px 0 0 var(--shadow-color),
          1px 1px 0 var(--shadow-color), 0 1px 0 var(--shadow-color),
          -1px 1px 0 var(--shadow-color), -1px 0 0 var(--shadow-color);
        }`;
      },
    ],
  ],
});
