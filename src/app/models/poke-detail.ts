import { Ability } from "./ability";
import { MoveDetail } from "./move-detail";
import { PokemonImages } from "./poke-images";
import { Type } from "./type";

export interface PokemonDetailed {
    id: number,
    pokemonName: string,
    baseExperience: number,
    weight: number,
    height: number,
    baseAttack: number,
    baseDefense: number,
    baseSpecialAttack: number,
    baseSpecialDefense: number,
    flavorText: string,
    genus: string,
    evolutionLevel: number,
    evolvesInto: string,
    evolutionTrigger: string,
    abilities: Ability[]
    moves: MoveDetail[],
    types: Type[],
    generations: string[],
    versions: string[],
    images: PokemonImages
}