import { Ability } from "./ability";
import { Move } from "./move";
import { Type } from "./type";

export interface Pokemon {
    id: number,
    pokemonName: string,
    baseExperience: number,
    weight: number,
    height: number,
    baseAttack: number,
    baseDefense: number,
    flavorText: string,
    genus: string,
    evolutionLevel: number,
    evolvesInto: string,
    evolutionTrigger: string,
    abilities: Ability[]
    moves: Move[],
    types: Type[],
    generations: string[],
    versions: string[]
}