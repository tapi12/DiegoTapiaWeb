import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public openMenu: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
