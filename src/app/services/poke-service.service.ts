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
  
  // Gets all pokemon
  getMany() {
    let params: HttpParams = new HttpParams();
    // TODO: Get it working (likely with search bar logic) to not have to load every single pokemon, which would take a long time
    params = params.append("pageSize", 721);
    return this.http.get<PokemonList>(`${environment.apiUrl}/Pokemon`,{params});
  }

  // Get an individual pokemon given its id or name
  getByIdentifier(identifier: string){
    return this.http.get<Pokemon>(`${environment.apiUrl}/Pokemon/${identifier}`);
  }
}
