import { MoveSimple } from "./move-simple";
import { Type } from "./type";

export interface MoveDetail extends MoveSimple {
    moveType: Type[];
}