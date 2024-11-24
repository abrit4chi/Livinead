export class PlayerWeaponSystem {
    constructor(playerWeapon) 
    {
        // Propriété(s) de l'instance
        this.playerWeapon = playerWeapon;
        this.playerWeaponAnimation = this.playerWeapon.playerWeaponAnimation;
        this.audioManager = this.playerWeapon.player.game.audioManager;

        // Drapeau(x)
        this.shootFlag = false;
        this.hitFlag = false;
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
                if (this.lastShotTime === undefined || Date.now() - this.lastShotTime > this.playerWeapon.currentWeapon.fireRate) 
                {
                    // Si c'est le zombie
                    if (this.playerWeapon.player.playerRaycast.getTargetRaycast() == "Character" && this.playerWeapon.player.game.zombie.zombieHealth.health > 0)
                    {
                        this.hitFlag = true;
                        this.playerWeapon.createHitCrosshair();
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