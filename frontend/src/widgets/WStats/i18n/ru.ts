import { StatLineProps } from '../ui/';

export default {
  stats: {
    header: 'мы в цифрах',
    lines: [
      { value: '5', desc: 'лет работы' },
      { value: '100+', desc: 'сданных объектов' },
      { value: '10 000', desc: 'метров пробурено' },
    ] as StatLineProps[],
  },
};
