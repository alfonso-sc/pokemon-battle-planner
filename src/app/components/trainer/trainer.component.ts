import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonList } from '../../models/poke-list';
import { PokeServiceService } from '../../services/poke-service.service';
import { PokemonDetailed } from '../../models/poke-detail';
import { PokemonSimple } from '../../models/poke-simple';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  pokemonResponse$!: Observable<PokemonList>;
  trainersPokemon!: PokemonDetailed[];
  selectedPokemon!: PokemonSimple;
  numPokemon: number;

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
    newPokemon.subscribe(
      np => {
        this.trainersPokemon.push(np);
      }
    )
    console.log(this.selectedPokemon.pokemonName + ` added!`);
  }
}

