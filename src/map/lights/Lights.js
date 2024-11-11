import { LightBase } from "./components/LightBase";

export class Lights {
    constructor(map) 
    {
        // Propriétés de l'instance
        this.map = map;

        // Instance(s)
        this.lightBase = new LightBase(this);
    }
}