import { Component, Input } from '@angular/core';
import { PokemonDetailed } from '../../models/poke-detail';
import { PokeServiceService } from '../../services/poke-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input({required: true}) 
  pokemon!: PokemonDetailed; // Define the input property for Pokemon data
  
  level: number;

  constructor(
    private pokeService: PokeServiceService
  ) {
    this.level = 1;
  }

  ngOnInit() {
    this.pokemon.moves= [];
  }

  addMove() {
    // Implement the logic to add moves
    console.log('Move added!');
  }
}
