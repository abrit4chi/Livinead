import { Floor } from "./components/Floor";
import { Cube } from "./components/Cube";

export class Objects {
    constructor(map) 
    {
        // Propriété(s) de l'instance
        this.map = map;

        // Instance(s)
        this.floor = new Floor(this);
        this.cube = new Cube(this);
    }
}