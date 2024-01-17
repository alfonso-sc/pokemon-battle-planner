import { PokemonImages } from "./poke-images";
import { Type } from "./type";

export interface PokemonSimple {
    id: number,
    pokemonName: string,
    baseExperience: number,
    weight: number,
    height: number,
    flavorText: string,
    genus: string,
    types: Type[],
    images: PokemonImages
}