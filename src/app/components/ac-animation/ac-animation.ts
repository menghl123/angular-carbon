import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyIn = trigger('flyIn', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate(500, keyframes([
      style({opacity: 0, transform: 'translateX(0)', offset: 0}),
      style({opacity: 1, transform: 'translateX(600px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(0, keyframes([
      style({opacity: 1, transform: 'translateX(600px)',     offset: 0}),
      style({opacity: 1, transform: 'translateX(600px)', offset: 0.7}),
      style({opacity: 0, transform: 'translateX(600px)',  offset: 1.0})
    ]))
  ])
]);
