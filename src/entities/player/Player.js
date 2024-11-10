import { PlayerCameraController } from "./components/PlayerCameraController";
import { PlayerState } from "./components/PlayerState";

export class Player {
    constructor(game) 
    {
        // Propriétés de l'instance
        this.game = game;
        
        // Instance(s)
        this.playerCameraController = new PlayerCameraController(this);
        this.playerState = new PlayerState(this);
    }
}