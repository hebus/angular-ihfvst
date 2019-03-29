import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  sharedObject = { name: "Angular", surname:"none"};
}
