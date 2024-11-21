export class PlayerWeaponSystem {
    constructor(playerWeapon) 
    {
        // Propriété(s) de l'instance
        this.playerWeapon = playerWeapon;
        this.playerWeaponAnimation = this.playerWeapon.playerWeaponAnimation;
        this.audioManager = this.playerWeapon.player.game.audioManager;

        // Drapeau(x)
        this.shootFlag = false;
    }

    update()
    {
        this.shootSystem();
    }

    shootSystem()
    {
        const animation = this.playerWeaponAnimation.animations['Armature|Shoot'];

        if (animation)
        {
            if (animation.isRunning())
            {
                if (this.lastShotTime === undefined || Date.now() - this.lastShotTime > 500) 
                {
                    // Si c'est le zombie
                    if (this.playerWeapon.player.playerRaycast.getTargetRaycast() == "Zombie_Cylinder")
                    {
                        // Créer le hitmarker
                        this.playerWeapon.createHitCrosshair();

                        // Jouer le son du hitmarker
                        this.audioManager.playSound('hitGlock');
                    }

                    this.lastShotTime = Date.now();
                }
            }
            else 
            {
                this.lastShotTime = undefined;
            }
        }
    }
}