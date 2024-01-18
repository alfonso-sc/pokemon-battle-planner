import { MoveDetail } from "./move-detail";
import { PokemonDetailed } from "./poke-detail";

export interface PokemonBattle extends PokemonDetailed {
    level: number;
    selectedMoves: MoveDetail[];
}