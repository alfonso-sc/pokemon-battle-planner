import { Component, Input } from '@angular/core';
import { PokemonBattle } from '../../models/poke-battle';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  @Input() heroPokemon!: PokemonBattle[];
  @Input() oppPokemon!: PokemonBattle[];
}
