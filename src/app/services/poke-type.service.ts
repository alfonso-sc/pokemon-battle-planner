import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Efficacy } from '../models/efficacy';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class PokeTypeService {

  constructor(
    private http: HttpClient
  ) { }
  
  // Get every type in the table
  getMany(){
    return this.http.get<Type[]>(`${environment.apiUrl}/Types`)
  }

  // Get efficacy of attack given attacker and defender as parameters
  getEff(att?: string, def?: string) {
    let params: HttpParams = new HttpParams();
    if (att) params = params.append("attackerType", att);
    if (def) params = params.append("defenderType", def);
    return this.http.get<Efficacy>(`${environment.apiUrl}/Types/CombatEfficacy`,{params});
  }
}
