import { Type } from "./type";

export interface MoveDetail {
    id: number,
    moveName: string,
    power: number,
    powerPoints: number,
    accuracy: number,
    flavorText: string,
    effect: string
    moveType: Type[];
}