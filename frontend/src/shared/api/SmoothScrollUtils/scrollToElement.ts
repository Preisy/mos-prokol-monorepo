import { scroll } from 'quasar';

const { getScrollTarget, setVerticalScrollPosition } = scroll;
export function scrollToElement(
  el: HTMLElement,
  additionalOffset: number = -100,
  duration: number = 500
) {
  const target = getScrollTarget(el);
  const offset = el.offsetTop + additionalOffset;
  setVerticalScrollPosition(target, offset, duration);
}
