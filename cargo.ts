import { IPayload } from "./IPayload";

export class Cargo implements IPayload{
    massKg: number = 0;
    material: string = "";
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
}