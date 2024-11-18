export class PlayerWeaponSystem {
    constructor(playerWeapon) 
    {
        // Propriété(s) de l'instance
        this.playerWeapon = playerWeapon;
        this.playerWeaponAnimation = this.playerWeapon.playerWeaponAnimation;

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
                    console.log(this.playerWeapon.player.playerRaycast.getTargetRaycast())
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