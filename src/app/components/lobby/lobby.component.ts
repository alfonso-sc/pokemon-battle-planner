import { Component, ViewChild } from '@angular/core';

import { PokemonBattle } from '../../models/poke-battle';
import { TrainerComponent } from '../trainer/trainer.component';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

  madeMatch: boolean;

  @ViewChild('heroComponent') hero: TrainerComponent;
  @ViewChild('opponentComponent') opponent: TrainerComponent;

  heroBattlePokemon!: PokemonBattle[];
  opponentBattlePokemon!: PokemonBattle[];

  constructor(private battleService: BattleService) {
    this.hero = {} as TrainerComponent;
    this.opponent = {} as TrainerComponent;
    this.madeMatch = false;
  }

  receiveDataFromHero(battlePokemon: PokemonBattle[]): void {
    this.heroBattlePokemon = battlePokemon;
  }

  receiveDataFromOpponent(battlePokemon: PokemonBattle[]): void {
    this.opponentBattlePokemon = battlePokemon;
  }

  matchPokemon(heroBattlePokemon: PokemonBattle, opponentBattlePokemon: PokemonBattle) {
    this.battleService.matchPokemon(heroBattlePokemon, opponentBattlePokemon);
  }

  onClickFindMatches(): void {
    console.log("heroBattlePokemon", this.heroBattlePokemon)
    console.log("opponentBattlePokemon", this.opponentBattlePokemon)
    this.madeMatch = true;
  }
}
