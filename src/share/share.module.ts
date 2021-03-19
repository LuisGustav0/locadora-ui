import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HttpClientService } from './service/http-client-service';
import { AlertMessageService } from './service/alert-message.service';
import { MemoryDbService } from './service/memory-db.service';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDbService),

    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    FormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    BsDatepickerModule
  ],
  providers: [
    AlertMessageService,
    HttpClientService,
    ConfirmationService
  ]
})

export class ShareModule {

}

