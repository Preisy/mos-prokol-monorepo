import { StagesI18n } from './types';

export default {
  stages: {
    header: 'Этапы работ',
    data: [
      {
        cardText: 'Планирование и расчет траектории бурения',
        displayText:
          'Включает в себя исследование местности, где планируется бурение скважины. Выясняются места расположения помех, и составляется наиболее рациональная карта маршрута.',
      },
      {
        cardText: 'Бурение пилотной скважины',
        displayText:
          'С помощью специальной буровой головки, скошенной на конце, грунт «прокалывается» в заданном направлении и глубине. Таким образом, задается траектория линии коммуникаций',
      },
      {
        cardText: 'ПРЕДВАРИТЕЛЬНОЕ РАСШИРЕНИЕ',
        displayText:
          'Данный этап необходим для дальнейшего беспрепятственного протягивания коммуникаций. Вместо буровой головки в качестве насадки используется расширитель обратного действия, имеющего также отверстия для подачи в скважину бентонитового раствора',
      },
      {
        cardText: 'ПРОТЯГИВАНИЕ ТРУБОПРОВОДА',
        displayText:
          'К противоположной от буровой установки стороне пилотной скважины доставляется плеть трубопровода, который прикрепляется к штанге буровой установки. Буровая установка затягивает трубопровод в скважину.',
      },
    ],
  } as StagesI18n,
};
