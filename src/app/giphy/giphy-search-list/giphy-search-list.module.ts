import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchListComponent } from './giphy-search-list.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [ GiphySearchListComponent ],
  imports: [
    ShareModule
  ],
  exports: [
    GiphySearchListComponent
  ]
})
export class GiphySearchListModule { }
