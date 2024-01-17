import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemon: any; // Define the input property for Pokemon data

  addMove() {
    // Implement the logic to add moves
    console.log('Move added!');
  }
}
