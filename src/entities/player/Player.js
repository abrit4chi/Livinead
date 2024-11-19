import { PlayerCameraController } from "./components/PlayerCameraController";
import { PlayerState } from "./components/PlayerState";
import { PlayerControl } from "./components/PlayerControl";
import { PlayerMovement } from "./components/PlayerMovement";
import { PlayerBody } from "./components/PlayerBody";
import { PlayerSound } from "./components/PlayerSound";
import { PlayerWeapon } from "./components/PlayerWeapon";
import { PlayerRaycast } from "./components/PlayerRaycast";

export class Player {
    constructor(game) 
    {
        // Propriétés de l'instance
        this.game = game;
        
        // Instance(s)
        this.playerCameraController = new PlayerCameraController(this);
        this.playerBody = new PlayerBody(this);
        this.playerState = new PlayerState(this);
        this.playerSound = new PlayerSound(this);
        this.playerControl = new PlayerControl(this);
        this.playerMovement = new PlayerMovement(this);
        this.playerWeapon = new PlayerWeapon(this);
        this.playerRaycast = new PlayerRaycast(this);
    }

    update()
    {
        this.playerSound.update();
        this.playerMovement.update();
        this.playerWeapon.update();
        this.playerRaycast.getTargetRaycast();
    }
}