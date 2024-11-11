export class GlockInteraction {
    constructor(glock) 
    {
        // Propriétés de l'instance
        this.glock = glock;
        this.playerState = this.glock.playerWeapon.player.playerState;
    }

    update()
    {
        this.aim();
    }

    aim()
    {
        if (this.glock.glock)
        {
            if (this.playerState.aim)
            {
                this.glock.glock.position.set(-0.366, -0.23, -0.35);
            }
            else 
            {
                this.glock.glock.position.set(-0.2, -0.3, -0.35);
            }
        }
    }
}