import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NossaVisaoRoutingModele } from './nossa-visao-routing.module';
import { NossaVisaoComponent } from './nossa-visao.component';

@NgModule({
  declarations: [ NossaVisaoComponent ],
  imports: [
    CommonModule,
    NossaVisaoRoutingModele
  ]
})
export class NossaVisaoModule { }
