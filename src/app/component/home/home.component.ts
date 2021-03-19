import { Component } from '@angular/core';
import { HeaderService } from '../template/header/header.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (headerService: HeaderService) {
    headerService.header = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }

    window.document.title = 'Início';
  }
}
