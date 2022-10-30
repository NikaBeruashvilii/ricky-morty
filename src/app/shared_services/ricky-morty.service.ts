import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyService {
  apiUrl: string = "https://rickandmortyapi.com/api/character";

  constructor(private httpClient:HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }
  getRickyMortyId(charactersId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${charactersId}`)
  }
}

