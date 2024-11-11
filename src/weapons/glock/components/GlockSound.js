export class GlockSound {
    constructor(glock) 
    {
        // Propriétés de l'instance
        this.glock = glock;
        this.playerState = this.glock.playerWeapon.player.playerState;
        this.audioManager = this.glock.playerWeapon.player.game.audioManager;

        // Charger les sons
        this.audioManager.loadSound('aimGlock', '../../../../assets/sounds/weapons/glock/aim.mp3', false, false, 0.02, 1);
        
        // Drapeau(x) pour les sons
        this.aimSoundFlag = false;
    }

    update()
    {
        this.aimSound();
    }

    aimSound()
    {
        if (this.playerState.aim && !this.aimSoundFlag)
        {
            this.audioManager.playSound('aimGlock');
            this.aimSoundFlag = true;
        }
        else if (!this.playerState.aim)
        {
            this.aimSoundFlag = false;
        }

    }
}