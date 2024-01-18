import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonList } from '../../models/poke-list';
import { PokeServiceService } from '../../services/poke-service.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {

  pokemonResponse$!: Observable<PokemonList>;

  constructor(private pokeService: PokeServiceService) { }

  getPokemon() {
    this.pokemonResponse$ = this.pokeService.getMany()
  }

  // use to console.log from html for debugging, etc.
  html_log(val: any): void {
    console.log(val);
  }
}

