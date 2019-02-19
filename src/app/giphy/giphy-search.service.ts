import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }

  pesquisarGiphy(qtdeGif: string, termo: string): Observable<any> {
    const url = 'https://api.giphy.com/v1/gifs/search?q=' + termo + '&api_key=dc6zaTOxFJmzC&limit=' + qtdeGif;
    return this.http.get<any>(url);
  }
}
