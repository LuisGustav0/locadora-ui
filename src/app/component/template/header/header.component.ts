import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  constructor (private headerService: HeaderService) {
  }

  get title (): string {
    return this.headerService.header.title;
  }

  get icon (): string {
    return this.headerService.header.icon;
  }

  get routerUrl (): string {
    return this.headerService.header.routeUrl;
  }
}
