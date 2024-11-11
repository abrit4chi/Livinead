export class PlayerControl {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.playerState = this.player.playerState;

        // Instruction(s)
        this.createControl();
    }

    createControl()
    {
        this.moveControl();
    }

    moveControl()
    {
        document.addEventListener('keydown', (event) => {
            switch (event.code) 
            {
                case "KeyW":
                    this.playerState.moveForward = true;
                    break;
                case "KeyS":
                    this.playerState.moveBackward = true;
                    break;
                case "KeyD":
                    this.playerState.moveRight = true;
                    break;
                case "KeyQ":
                    this.playerState.moveLeft = true;
                    break;
                default:
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.code) 
            {
                case "KeyW":
                    this.playerState.moveForward = false;
                    break;
                case "KeyS":
                    this.playerState.moveBackward = false;
                    break;
                case "KeyD":
                    this.playerState.moveRight = false;
                    break;
                case "KeyQ":
                    this.playerState.moveLeft = false;
                    break;
                default:
                    break;
            }
        });
    }
}