import { Component } from '@angular/core';

import { SharedService } from './shared.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Angular";
  obj;

  constructor(private sharedService:SharedService){
    this.obj = sharedService.sharedObject;
  }
}
