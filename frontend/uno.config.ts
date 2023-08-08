import type { Theme } from '@unocss/preset-uno'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss'

export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {},
      extraProperties: {
        display: 'inline-block',
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
  rules: [
    ['text-shadowed-white', { 'text-shadow': '2px 4px 10px #FFFFFF' }],
    [
      'box-shadow-lg',
      {
        'box-shadow':
          '237px 139px 110px rgba(69, 80, 161, 0.01), 133px 78px 93px rgba(69, 80, 161, 0.05), 59px 35px 69px rgba(69, 80, 161, 0.09), 15px 9px 38px rgba(69, 80, 161, 0.1), 0px 0px 0px rgba(69, 80, 161, 0.1)',
      },
    ],
    [
      'box-shadow-sm',
      {
        'box-shadow':
          '55px 32px 26px rgba(69, 80, 161, 0.01), 31px 18px 22px rgba(69, 80, 161, 0.05), 14px 8px 16px rgba(69, 80, 161, 0.09), 3px 2px 9px rgba(69, 80, 161, 0.1), 0px 0px 0px rgba(69, 80, 161, 0.1)',
      },
    ],
    [
      'bg-linear-primary/20',
      { background: 'linear-gradient(180deg, #B1BBFF -223.61%, rgba(177, 187, 255, 0) 71.88%);' },
    ],
    [
      'bg-linear-primary/50',
      { background: 'linear-gradient(189.22deg, #9aa7ff 5%, rgba(154, 167, 255, 0) 105.25%), #ffffff;' },
    ],
  ],
})
