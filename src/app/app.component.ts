import { Component } from '@angular/core';
import {style, state, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('state', [
      state('initial', style({width: '100px'})),
      transition('* <=> *', animate(100))
    ])
  ],
  host: {
    '[@state]': 'myState'
  }
})
export class AppComponent {
  myState = 'initial';
}
