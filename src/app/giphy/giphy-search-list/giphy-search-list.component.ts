import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  listaGifs: any[];

  constructor() { }

  ngOnInit() {
  }

}
