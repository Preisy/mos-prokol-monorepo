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
      primary3: '#c6c6c6',
      primary4: '#efeeea',
      secondary: '#1A1A1A',
      secondary2: '#3A3A3A',
      secondary3: '#C9C9C9',
      secondary4: '#313131',
      secondary5: '#111010',
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
      mds: ['1rem', '1.4'],
      lgs: ['1.2rem', '1'],
      lgx: ['1.2rem', '1'],
      xls: ['2.65rem', '1.4'],
      xll: ['2.3rem', '1.4'],
      '2xl': ['3rem', '1.4'],
    },
    breakpoints: {
      sm: '450px',
      '2sm': '600px',
      md: '900px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
  },
  preflights: [
    {
      getCSS: ({ theme }) => {
        const fontSizesMobile = {
          sm: '',
          base: '0.6rem',
          mds: '0.5rem',
          md: '0.7rem',
          lgs: '0.6rem',
          lgx: '0.7rem',
          xls: '0.8rem',
          xll: '1.2rem',
          '2xl': '1.3rem',
        } as const;

        const pxIn1Rem = 20; //See app.scss in app/styles/app.scss
        const mobileScreen = theme.breakpoints?.sm;
        const desktopScreen = theme.breakpoints?.['2xl'];
        if (!mobileScreen || !desktopScreen) return '';
        const deltaScreen =
          (parseInt(desktopScreen) - parseInt(mobileScreen)) / pxIn1Rem;
        const mobileScreenInRems = parseInt(mobileScreen) / pxIn1Rem + 'rem';

        let result = '';
        for (const font in fontSizesMobile) {
          const selector = `.text-${font}, [text-${font}=""]`;
          const minFont = fontSizesMobile[font as keyof typeof fontSizesMobile];
          const maxFont = theme.fontSize?.[font]?.[0];
          if (!minFont || !maxFont) continue;

          const delta = parseFloat(maxFont) - parseFloat(minFont);

          const fluid = `
          ${selector} {
            font-size: ${minFont} !important;
          }
          @media screen and (min-width: ${mobileScreen}) {
            ${selector} {
              font-size: calc(${minFont} + ${delta} * ((100vw - ${mobileScreenInRems}) / ${deltaScreen})) !important;
            }
          }
          @media screen and (min-width: ${desktopScreen}) {
            ${selector} {
              font-size: ${maxFont} !important;
            }
          }
          `;
          result = result.concat(fluid);
        }

        return result;
      },
    },
  ],
  rules: [
    [
      'bottom-drop-shadow',
      { filter: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.3))' },
    ],
    [
      'bg-gradient-yellow',
      {
        'background-image':
          'linear-gradient(180deg, #fceb91 0%, #ffd743 100%);',
      },
    ],
    [
      'bg-gradient-shadow',
      {
        'background-image':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.55%, rgba(0, 0, 0, 0.70) 78.97%)',
      },
    ],
    [
      'bg-gradient-shadow-left',
      {
        'background-image':
          'linear-gradient(71deg, rgba(0, 0, 0, 0.6) 35.1%, rgba(0, 0, 0, 0) 100%)',
      },
    ],
    [
      'bg-gradient-light',
      {
        'background-image': 'linear-gradient(180deg, #F9F9F9 0%, #E1DED3 100%)',
      },
    ],
    [
      /^text-outline-(.+)$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, color], { theme, rawSelector }) => {
        const shadowColor = theme.colors?.[color] ?? color;
        const isImportant = (rawSelector as string).endsWith('!');

        return `
        ${toEscapedSelector(rawSelector)} {
          --shadow-color: ${shadowColor} ${isImportant ? '!important' : ''};
          text-shadow: -1px -1px 0 var(--shadow-color), 0 -1px 0 var(--shadow-color),
          1px -1px 0 var(--shadow-color), 1px 0 0 var(--shadow-color),
          1px 1px 0 var(--shadow-color), 0 1px 0 var(--shadow-color),
          -1px 1px 0 var(--shadow-color), -1px 0 0 var(--shadow-color);
        }`;
      },
    ],
    [
      /^set-shadow-color-(.+)$/,
      ([, color], { theme }) => ({
        '--shadow-color': (theme.colors?.[color] ?? color) as string,
      }),
    ],
  ],
});
