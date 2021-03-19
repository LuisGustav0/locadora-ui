import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service'
import * as moment from 'moment';

@Component({
  selector: 'app-pesquisa-filme',
  templateUrl: './pesquisa-filme.component.html',
  styleUrls: ['./pesquisa-filme.component.css']
})
export class PesquisaFilmeComponent implements OnInit {

  service: FilmeService;

  constructor (filmeService: FilmeService) {
    this.service = filmeService;

    this.service.changeTitle({
      title: 'Pesquisa de filme',
      icon: 'search',
      routeUrl: '/filmes'
    });
  }

  ngOnInit (): void {
    this.service.search();
  }

  formatDateToAno (date: Date) {
    const ano = moment(date);

    return ano.year();
  }
}
