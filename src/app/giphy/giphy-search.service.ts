import { Injectable } from '@angular/core';

@Injectable()
export class GiphySearchService {

  constructor() {
  }

  pesquisarGiphy(qtdeGif: string, termo: string): void {
    console.log('pesquisarGiphy foi chamado');
  }
}
