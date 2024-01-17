import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/poke-list';
import { Pokemon } from '../models/poke';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getMany(pageSize?: number) {
    let params: HttpParams = new HttpParams();
    if (pageSize) params = params.append("pageSize", pageSize)
    return this.http.get<PokemonList>(`${environment.apiUrl}/Pokemon`,{params});
  }

  getMon(identifier: string){
    return this.http.get<Pokemon>(`${environment.apiUrl}/Pokemon/${identifier}`);
  }
}
