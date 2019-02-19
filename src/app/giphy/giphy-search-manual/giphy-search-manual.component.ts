import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from '../giphy-search.service';

@Component({
  selector: 'app-giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {
  gifs: any[] = [];
  qtdeGif: string;
  termo: string;

  constructor(private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
  }

  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.qtdeGif, this.termo)
      .subscribe(response => this.gifs = response.data);
  }
}
