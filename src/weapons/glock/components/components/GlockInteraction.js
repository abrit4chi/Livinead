export class GlockInteraction {
    constructor(glock) 
    {
        // Propriétés de l'instance
        this.glock = glock;
        this.playerState = this.glock.playerWeapon.player.playerState;
    }

    update()
    {
        
    }
}