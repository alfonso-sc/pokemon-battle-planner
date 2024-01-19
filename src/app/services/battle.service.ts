import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { MoveDetail } from '../models/move-detail';
import { PokemonBattle } from '../models/poke-battle';
import { Type } from '../models/type';
import { PokeTypeService } from './poke-type.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private pokemonTypeService: PokeTypeService) { }

  _PHYSICAL_MOVES: string[] = [
    "Normal",
    "Fighting",
    "Flying",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Poison",
    "Steel",
  ];
  _SPECIAL_MOVES: string[] = [
    "Water",
    "Grass",
    "Fire",
    "Ice",
    "Electric",
    "Psychic",
    "Dragon",
    "Dark",
  ];

  getAttackUnadjusted(pokemon: PokemonBattle, move: MoveDetail): number {
    let base = this._PHYSICAL_MOVES.includes(move.moveType.typeName)
      ? pokemon.baseAttack
      : pokemon.baseSpecialAttack;
    console.log(base);

    let attack = 5 + base * 0.02 * pokemon.level;

    return attack;
  }

  getDefenseUnadjusted = this.getAttackUnadjusted;


  getAttackDefense(
    hero: PokemonBattle,
    opponent: PokemonBattle,
    move: MoveDetail
  ): { attack: number; defense: number } {
    let attack = this.getAttackUnadjusted(hero, move);
    let defense = this.getDefenseUnadjusted(opponent, move);
    if (attack > 255 || defense > 255) {
      attack = Math.floor(attack / 4);
      defense = Math.floor(defense / 4);
    }
    return { attack, defense };
  };

  getStab(pokemon: any, move: any): number {
    const filteredArray = pokemon.types.filter((type: any) => type.id === move.moveType.id);
    return filteredArray.length === 1 ? 1.5 : 1
  }

  getRandom = function (damageNoRandom: any, first = 217, last = 255) {
    let random = 1;
    if (damageNoRandom === 1) {
      return random;
    }

    random = (first + last) / 2; // take the average of the random values instead to simplify

    // random = Math.floor(avgRange / 255);  // no idea what they mean, need clarification
    return random;
  }

  getTypes(heroMove: MoveDetail, opponentTypes: Type[]): Observable<number[]> {
    // Create an array of observables for each API call
    const observables = opponentTypes.map((opponentType) =>
      this.pokemonTypeService.getEfficacy(heroMove.moveType.typeName, opponentType.typeName).pipe(
        map((response) => response[0].damageFactor)
      )
    );

    // Use forkJoin to combine all observables into one
    return forkJoin(observables);
  }

  generateDamage(): void { }

  matchPokemon(heroBattlePokemon: PokemonBattle, opponentBattlePokemon: PokemonBattle): void {
    console.log(heroBattlePokemon, opponentBattlePokemon);
  }

}
