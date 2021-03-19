import { Component } from '@angular/core';

import { FilmeService } from '../filme.service'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.css']
})
export class CadastroFilmeComponent {

  service: FilmeService;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor (service: FilmeService) {
    this.service = service;

    this.service.changeTitle({
      title: 'Cadastro de filme',
      icon: 'article',
      routeUrl: '/filmes/new'
    });
  }
}
