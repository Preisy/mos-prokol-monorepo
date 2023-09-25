import { StagesI18n } from './types';

export default {
  stages: {
    header: 'Work stages',
    data: [
      {
        cardText: 'Planning and calculation of the drilling trajectory',
        displayText:
          'Includes a study of the area where the well is planned to be drilled. The locations of interference are found out, and the most rational route map is compiled.',
      },
      {
        cardText: 'Pilot well drilling',
        displayText:
          'With the help of a special drill head, beveled at the end, the soil is “pierced” in a given direction and depth. Thus, the trajectory of the communication line is set',
      },
      {
        cardText: 'PRE-EXTENSION',
        displayText:
          'This stage is necessary for further unhindered stretching of communications. Instead of a drill head, a reverse-acting expander is used as a nozzle, which also has holes for supplying bentonite slurry into the well',
      },
      {
        cardText: 'PIPING PULLING',
        displayText:
          'To the side of the pilot well opposite from the drilling rig, a string of pipeline is delivered, which is attached to the drilling rig rod. The drilling rig pulls the pipeline into the well.',
      },
    ],
  } as StagesI18n,
};
