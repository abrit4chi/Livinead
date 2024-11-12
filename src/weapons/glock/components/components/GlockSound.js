export class GlockSound {
    constructor(glockAnimation) 
    {
        // Propriétés de l'instance
        this.glockAnimation = glockAnimation;
        this.playerState = this.glockAnimation.glock.playerWeapon.player.playerState;
        this.audioManager = this.glockAnimation.glock.playerWeapon.player.game.audioManager;
        this.animations = this.glockAnimation.animations;

        // Charger les sons
        this.audioManager.loadSound('aimGlock', '../../../../assets/sounds/weapons/glock/aim.mp3', false, false, 0.02, 1);
        this.audioManager.loadSound('reloadGlock', '../../../../assets/sounds/weapons/glock/reload.mp3', false, false, 0.1, 1.1);
            
        // Drapeau(x) pour les sons
        this.aimSoundFlag = false;
        this.reloadSoundFlag = false;
    }

    update()
    {
        this.aimSound();
        this.reloadSound();
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

    reloadSound()
    {
        const animation = this.animations['Armature|Reload'];

        if (animation)
        {
            if (animation.isRunning())
            {
                this.audioManager.playSound('reloadGlock');
            }
            else 
            {
                this.audioManager.stopSound('reloadGlock');
            }
        }
    }
}