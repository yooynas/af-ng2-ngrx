import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Resto } from '../reducers/resto';
import { Dictionary } from '../filters/dictionary';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss'],
  animations: [
    trigger('open', [
      state('void', style({
        height: '0'
      })),
      state('closed', style({
        height: '0'
      })),
      state('open', style({
        height: '*'
      })),
      transition('void => open', animate('300ms')),
      transition('* => *', animate('300ms'))
    ])
  ]
})
export class RestoComponent {
  @Input() resto: Resto;
  @Input() idx: number;
  @Output() action = new EventEmitter();
  cuisines: Object = Dictionary.cuisines;
  areas: Object;

  constructor() {
    this.areas = Dictionary.areas;
  }

  toAlphaIndex(i) {
    return String.fromCharCode('A'.charCodeAt(0) + parseInt(i, 10));
  }
  trackOutboundLink(type, link) {
    console.log(type, link);
    return false;
  }
}
