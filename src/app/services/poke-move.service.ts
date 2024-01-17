import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoveSimple } from '../models/move-simple';
import { environment } from '../environment/environment';
import { MoveDetail } from '../models/move-detail';

@Injectable({
  providedIn: 'root'
})
export class PokeMoveService {

  constructor(
    private http: HttpClient
  ) { }

  // Gets all moves for a certain pokemon given their name
  getMoves(name?: string) {
    return this.http.get<MoveSimple[]>(`${environment.apiUrl}/Moves/species/${name}`);
  }

  // Gets a single move given it's identifier
  getMoveByIdentifier(identifier?: string) {
    return this.http.get<MoveDetail>(`${environment.apiUrl}/Moves/${identifier}`);
  }
}
