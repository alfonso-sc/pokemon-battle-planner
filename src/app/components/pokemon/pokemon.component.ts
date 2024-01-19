import { Component, Input } from '@angular/core';
import { PokeMoveService } from '../../services/poke-move.service';
import { MoveDetail } from '../../models/move-detail';
import { PokemonBattle } from '../../models/poke-battle';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input({required: true}) 
  pokemon!: PokemonBattle;
  possibleMoves!: MoveDetail[];
  selectedMove!: MoveDetail;
  @Input() opponent!: boolean;

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
    this.possibleMoves = this.possibleMoves.slice().sort((a, b) => b.power - a.power);
  }

  // This function checks if the move and the pokemon share any type
  hasMatchingType(move: MoveDetail) {
    return this.pokemon.types.some(pokemonType =>
        pokemonType.id === move.moveType.id)
  }

  alreadySelected(move: MoveDetail) {
    return this.pokemon.selectedMoves.some(selectedMove =>
        selectedMove.id === move.id)
  }

  fixName(moveName: string) {
    return moveName.replace(/-/g, ' ').toUpperCase();
  }

  addMove() {
    // Implement the logic to add moves
    console.log(`Adding ` + this.selectedMove.moveName);
    this.numMoves += 1;
    const newMove = this.moveService.getMoveByIdentifier(String(this.selectedMove.id));
    newMove.subscribe(
      nm => {
        this.pokemon.selectedMoves.push(nm);
        // TODO: remove moves from the possibleMoves array once they are picked
      }
    )
    console.log('Move added!');
  }
}
