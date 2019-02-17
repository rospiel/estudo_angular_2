import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { RouterModule } from '@angular/router';
import {ContatoModule} from './contato/contato.module';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    NossaVisaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ContatoModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
