import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';

import { MatCardModule } from '@angular/material/card'

import { HomeComponent } from './home.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatCardModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule {

}

