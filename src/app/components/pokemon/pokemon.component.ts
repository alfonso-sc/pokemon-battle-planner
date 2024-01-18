import { Component, Input } from '@angular/core';
import { PokemonDetailed } from '../../models/poke-detail';
import { PokeMoveService } from '../../services/poke-move.service';
import { MoveDetail } from '../../models/move-detail';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input({required: true}) 
  pokemon!: PokemonDetailed; // Define the input property for Pokemon data
  possibleMoves!: MoveDetail[];
  selectedMove!: MoveDetail;

  numMoves!: number;
  level: number;

  constructor(
    private moveService: PokeMoveService
  ) {
    this.level = 1;
    this.numMoves = 0;
  }

  ngOnInit() {
    this.possibleMoves = this.pokemon.moves;
    this.pokemon.moves= [];
  }


  addMove() {
    // Implement the logic to add moves
    console.log(`Adding ` + this.selectedMove.moveName);
    this.numMoves += 1;
    const newMove = this.moveService.getMoveByIdentifier(String(this.selectedMove.id));
    newMove.subscribe(
      nm => {
        this.pokemon.moves.push(nm);
        // TODO: remove moves from the possibleMoves array once they are picked
      }
    )
    console.log('Move added!');
  }
}
