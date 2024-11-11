import { PlayerCameraController } from "./components/PlayerCameraController";
import { PlayerState } from "./components/PlayerState";
import { PlayerControl } from "./components/PlayerControl";
import { PlayerMovement } from "./components/PlayerMovement";

export class Player {
    constructor(game) 
    {
        // Propriétés de l'instance
        this.game = game;
        
        // Instance(s)
        this.playerCameraController = new PlayerCameraController(this);
        this.playerState = new PlayerState(this);
        this.playerControl = new PlayerControl(this);
        this.playerMovement = new PlayerMovement(this);
    }

    update()
    {
        this.playerMovement.update();
    }
}