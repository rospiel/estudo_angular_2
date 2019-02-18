import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { RouterModule } from '@angular/router';
import { ContatoModule } from './contato/contato.module';
import { AppRoutingModule } from './app-routing.module';
import {NossaVisaoModule} from './nossa-visao/nossa-visao.module';
import {QuemSomosModule} from './quem-somos/quem-somos.module';
import {GiphySearchManualComponentModule} from './giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    GiphySearchManualComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
