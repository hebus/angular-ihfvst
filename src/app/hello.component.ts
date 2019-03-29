import { Component, Input } from '@angular/core';

import {SharedService} from './shared.service';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{ name }}!</h1>
  <input [(ngModel)]="name">


  <h1>Shared Hello {{ shared.name }} aka {{ shared.surname }}!</h1>
  <input [(ngModel)]="shared.name">
  <input [(ngModel)]="shared.surname">
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  shared;

  constructor(private sharedService:SharedService){
    this.shared = sharedService.sharedObject;
  }
}
