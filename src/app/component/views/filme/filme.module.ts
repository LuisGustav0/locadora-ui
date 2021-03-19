import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FilmeService } from './filme.service';
import { ShareModule } from '../../../../share/share.module'
import { FilmeRoutingModule } from './filme.routing.module';

import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FilmeRoutingModule
  ],
  declarations: [
    PesquisaFilmeComponent,
    CadastroFilmeComponent
  ],
  exports: [
    PesquisaFilmeComponent,
    CadastroFilmeComponent
  ],
  providers: [
    FilmeService
  ]
})

export class FilmeModule {

}

