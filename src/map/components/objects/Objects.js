import { Floor } from "./components/Floor";

export class Objects {
    constructor(map) 
    {
        // Propriété(s) de l'instance
        this.map = map;

        // Instance(s)
        this.floor = new Floor(this);
    }
}