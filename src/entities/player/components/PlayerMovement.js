export class PlayerMovement {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.playerState = this.player.playerState;
        this.cameraController = this.player.playerCameraController.cameraController;
    }

    update()
    {
        this.getCurrentDirectionGazePlayer();
    }

    getCurrentDirectionGazePlayer()
    {
        this.cameraController.getDirection(this.playerState.currentDirectionGaze);
    }
}