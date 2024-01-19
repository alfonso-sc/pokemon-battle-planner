import { Component, ViewChild } from '@angular/core';
import { PokemonBattle } from '../../models/poke-battle';
import { TrainerComponent } from '../trainer/trainer.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {
  @ViewChild('heroComponent') hero: TrainerComponent;
  @ViewChild('opponentComponent') opponent: TrainerComponent;

  heroBattlePokemon!: PokemonBattle[];
  opponentBattlePokemon!: PokemonBattle[];

  constructor() {
    this.hero = {} as TrainerComponent;
    this.opponent = {} as TrainerComponent;
  }

  receiveDataFromHero(battlePokemon: PokemonBattle[]): void {
    this.heroBattlePokemon = battlePokemon;
  }

  receiveDataFromOpponent(battlePokemon: PokemonBattle[]): void {
    this.opponentBattlePokemon = battlePokemon;
  }

  onClickFindMatches(): void {
    console.log("heroBattlePokemon", this.heroBattlePokemon)
    console.log("opponentBattlePokemon", this.opponentBattlePokemon)
  }
}
