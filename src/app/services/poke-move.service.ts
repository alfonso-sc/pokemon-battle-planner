import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Move } from '../models/move';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeMoveService {

  constructor(
    private http: HttpClient
  ) { }

  // Gets all moves for a certain pokemon given their name
  getMoves(name?: string) {
    return this.http.get<Move[]>(`${environment.apiUrl}/Moves/species/${name}`);
  }
}
