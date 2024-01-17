import { PokemonSimple } from "./poke-simple";

export interface PokemonList {
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalRecords: number,
    data: PokemonSimple[]
}