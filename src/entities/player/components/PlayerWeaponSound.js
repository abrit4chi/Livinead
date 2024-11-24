export class PlayerWeaponSound {
    constructor(playerWeapon) 
    {
        // Propriété(s) de l'instance
        this.playerWeapon = playerWeapon;
        this.playerWeaponAnimation = this.playerWeapon.playerWeaponAnimation;
        this.playerState = this.playerWeapon.player.playerState;
        this.audioManager = this.playerWeapon.player.game.audioManager;
        this.animations = this.playerWeaponAnimation.animations;
        this.weapon = this.playerWeapon.currentWeapon;
    }

    update()
    {
        this.aimSound();
        this.shootSound();
        this.reloadSound();
        this.hitSound();
    }

    aimSound()
    {
        if (this.playerState.aim && !this.aimSoundFlag)
        {
            this.audioManager.playSound(this.weapon.sounds[0]);
            this.aimSoundFlag = true;
        }
        else if (!this.playerState.aim)
        {
            this.aimSoundFlag = false;
        }

    }

    shootSound()
    {
        const animation = this.animations['Armature|Shoot'];

        if (animation)
        {
            if (animation.isRunning())
            {
                this.audioManager.playSound(this.weapon.sounds[1]);
            }
            else 
            {
                this.audioManager.stopSound(this.weapon.sounds[1]);
            }
        }
    }

    reloadSound()
    {
        const animation = this.animations['Armature|Reload'];

        if (animation)
        {
            if (animation.isRunning())
            {
                this.audioManager.playSound(this.weapon.sounds[2]);
            }
            else 
            {
                this.audioManager.stopSound(this.weapon.sounds[2]);
            }
        }
    }

    hitSound()
    {
        if (this.playerWeapon.playerWeaponSystem)
        {
            if (this.playerWeapon.playerWeaponSystem.hitFlag)
            {
                this.audioManager.playSound(this.weapon.sounds[3]);
                this.playerWeapon.playerWeaponSystem.hitFlag = false;
            }
        }
    }
}