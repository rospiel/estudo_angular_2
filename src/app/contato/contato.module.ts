import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContatoComponent} from './contato.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'contato', component: ContatoComponent }
    ])
  ]
})
export class ContatoModule { }
