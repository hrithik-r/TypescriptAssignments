import { IPayload } from "./IPayload";

export class Astronaut implements IPayload{
    massKg: number = 0;
    name: string = "";
    constructor(massKg: number, name: string){
        this.massKg = massKg;
        this.name = name;
    }
}