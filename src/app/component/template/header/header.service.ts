import { Injectable } from '@angular/core';
import { Header } from './header.model'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class HeaderService {

  private _header = new BehaviorSubject<Header>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor () {
  }

  get header (): Header {
    return this._header.value;
  }

  set header (header: Header) {
    this._header.next(header);
  }
}
