import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(request: any): Observable<any> {
    return this.http
    .get('https://imdb8.p.rapidapi.com/auto-complete', {
      params: { q: `${request}` },
      headers: {
        'X-RapidAPI-Key':
          'db92956dc3msh9aca8308ed7121dp18f13ejsneae1b3966f97',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    })
  }
}
