import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component'
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component'

const routes: Routes = [
  {
    path: 'filmes',
    component: PesquisaFilmeComponent
  },
  {
    path: 'filmes/new',
    component: CadastroFilmeComponent
  },
  {
    path: 'filmes/:id',
    component: CadastroFilmeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class FilmeRoutingModule {

}
