import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

import { Filme } from './filme.model'
import { Header } from '../../template/header/header.model'

import { HttpClientService } from '../../../../share/service/http-client-service'
import { AlertMessageService } from '../../../../share/service/alert-message.service'
import { ConfirmationService } from 'primeng/api';
import { HeaderService } from '../../template/header/header.service'

@Injectable()
export class FilmeService {

  resource: string = 'filmes';

  entity?: Filme;
  provider: Array<Filme>;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private alertMessageService: AlertMessageService,
    private confirmationService: ConfirmationService,
    private headerService: HeaderService) {
    this.entity = new Filme();
  }

  goToSearch () {
    this.clean();
    this.search();
    this.router.navigate([this.resource]);

    this.headerService.header = {
      title: 'Lista de filme',
      icon: 'search',
      routeUrl: '/filmes'
    }
  }

  goToCreate () {
    this.router.navigate([`${this.resource}/new`]);
  }

  goToEdit (id: number) {
    this.router.navigate([this.resource, id]);
  }

  changeTitle (header: Header): void {
    this.headerService.header = header;
    window.document.title = header.title;
  }

  getAlertMessage (): AlertMessageService {
    return this.alertMessageService;
  }

  clean (): void {
    this.entity = new Filme();
  }

  save (filme: Filme): Observable<Filme> {
    return this.httpClientService.post(this.resource, filme);
  }

  update (id: number, filme: Filme): Observable<Filme> {
    return this.httpClientService.put(this.resource, id, filme);
  }

  $save () {
    const {id} = this.entity;

    if (!id) {
      this.save(this.entity).subscribe((entity: Filme) => {
        this.getAlertMessage().showOk('Filme criado com sucesso!');

        this.entity = entity;
      });
    } else {
      this.update(id, this.entity).subscribe((entity) => {
        this.getAlertMessage().showOk('Filme alterado com sucesso!');
        this.entity = entity;
      });
    }
  }

  $editar (id: number) {
    this.findById(id).subscribe((entity) => {
      this.entity = entity;

      this.goToEdit(id);
    })
  }

  findById (id: number): Observable<Filme> {
    return this.httpClientService.get(`${this.resource}/${id}`);
  }

  search () {
    return this.httpClientService.get(this.resource)
      .subscribe((response) => this.provider = response);
  }

  delete (id: number): Observable<Filme> {
    return this.httpClientService.delete(this.resource, id);
  }

  $delete (filme: Filme): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja deletar ${filme.nome}`,
      accept: () => {
        this.delete(filme.id).subscribe(() => {
          this.getAlertMessage().showOk('Filme excluído com sucesso!');
          this.search();
        });
      }
    });


  }
}
