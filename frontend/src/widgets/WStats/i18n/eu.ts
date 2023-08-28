import { StatLineProps } from '../ui/';

export default {
  stats: {
    header: 'our stats',
    lines: [
      { value: '5', desc: 'years' },
      { value: '100+', desc: 'done works' },
      { value: '10 000', desc: 'meters drilled' },
    ] as StatLineProps[],
  },
};
