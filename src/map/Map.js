import { Objects } from "./components/objects/Objects";
import { World } from "../physics/World";
import { Lights } from "./components/lights/Lights";

export class Map {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;

        // Instance(s)
        this.world = new World(this);
        this.objects = new Objects(this);
        this.lights = new Lights(this);
    }
}