import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonList } from '../../models/poke-list';
import { PokeServiceService } from '../../services/poke-service.service';
import { PokemonSimple } from '../../models/poke-simple';
import { PokemonBattle } from '../../models/poke-battle';
import { PokemonDetailed } from '../../models/poke-detail';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  pokemonResponse$!: Observable<PokemonList>;
  trainersPokemon!: PokemonBattle[];
  selectedPokemon!: PokemonSimple;
  numPokemon: number;
  
  @Input() opponent!: boolean;

  constructor(
    private pokeService: PokeServiceService
    ) { 
      this.trainersPokemon = [];
      this.numPokemon = 0;
    }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    console.log("Getting Pokemon...")
    this.pokemonResponse$ = this.pokeService.getMany()
    console.log("Pokemon Gotten!")
  }

  // use to console.log from html for debugging, etc.
  html_log(val: any): void {
    console.log(JSON.stringify(val));
  }

  addPokemon() {
    console.log(`Adding ` + this.selectedPokemon.pokemonName);
    this.numPokemon += 1;
    const newPokemon = this.pokeService.getByIdentifier(this.selectedPokemon.pokemonName);
    newPokemon.subscribe(np => {
        const battlePokemon: PokemonBattle = {
          ...(np as PokemonDetailed), 
          level: 1, 
          selectedMoves: [],
        };
        this.trainersPokemon.push(battlePokemon);
      }
    )
    console.log(this.selectedPokemon.pokemonName + ` added!`);
  }
}

