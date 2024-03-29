import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonList } from '../../models/poke-list';
import { PokeServiceService } from '../../services/poke-service.service';
import { PokemonSimple } from '../../models/poke-simple';
import { PokemonBattle } from '../../models/poke-battle';
import { PokemonDetailed } from '../../models/poke-detail';
import { ActivatedRoute } from '@angular/router';

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
  done: boolean;
  name?: string;
  

  @Input() opponent!: boolean;

  @Output() newTrainersPokemonEvent = new EventEmitter<PokemonBattle[]>();

  constructor(
    private pokeService: PokeServiceService,
    private route: ActivatedRoute,
    ) { 
      this.trainersPokemon = [];
      this.numPokemon = 0;
      this.newGetPokemon();
      this.done = false;
    }

  ngOnInit() {
    this.route.queryParams
    .subscribe((qp) => {
      this.name=qp['name'];
      this.newGetPokemon();
    });
  }

  updateQuery() {
    this.newGetPokemon();
  }

  newGetPokemon() {
    console.log("Getting Pokemon...")
    this.pokemonResponse$ = this.pokeService.getManySearch(this.name)
    console.log("Pokemon Gotten!")
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

  sendPokemonToLobby(): void {
    this.done = true;
    this.newTrainersPokemonEvent.emit(this.trainersPokemon);
    console.log("sending to lobby!")
  }

}

