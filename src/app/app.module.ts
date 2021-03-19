import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from '../share/share.module'

import { HomeModule } from './component/home/home.module'
import { FilmeModule } from './component/views/filme/filme.module';

import { HeaderService } from './component/template/header/header.service'

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ShareModule,

    HomeModule,
    FilmeModule
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
