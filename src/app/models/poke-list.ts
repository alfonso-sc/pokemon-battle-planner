import { Pokemon } from "./poke";

export interface PokemonList {
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalRecords: number,
    data: Pokemon[]
}