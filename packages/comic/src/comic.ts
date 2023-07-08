import { Group } from "./group";

export interface Comic {
    id : BigInteger;
    name: string;
    image: string;
    groups: Array<Group>;
}