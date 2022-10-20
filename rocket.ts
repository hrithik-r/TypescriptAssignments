import { IPayload } from "./IPayload";
import { Cargo } from "./cargo"
import { Astronaut } from "./astronaut"

class Rocket implements IPayload{
    // instance variables
    name: string = "";
    totalCapacityKg: number = 0;
    massKg: number = 0;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    // parameterized constructor
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    

    // custom methods
    sumMass(items: IPayload[]): number{
        return 0;
    }

    currentMassKg(){

    }

    canAdd(){

    }

    addCargo(cargo: Cargo): boolean{
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        return false;
    }
}