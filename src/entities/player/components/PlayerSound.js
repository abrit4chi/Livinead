export class PlayerSound {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.playerState = this.player.playerState;
        this.audioManager = this.player.game.audioManager;

        // Instruction(s)
        this.audioManager.loadSound('footstep', '../../../../assets/sounds/player/footstep.mp3', true, false, 0.05, 0.85);
    }

    update()
    {
        this.moveSound();
    }

    moveSound()
    {
        if (this.playerState.moveForward || this.playerState.moveBackward || this.playerState.moveRight || this.playerState.moveLeft )
        {
            this.audioManager.playSound('footstep');
        }
        else 
        {
            this.audioManager.stopSound('footstep');
        }
    }
}