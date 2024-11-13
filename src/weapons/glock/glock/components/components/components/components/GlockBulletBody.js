export class GlockBulletBody {
    constructor(glockBullet) 
    {
        // Propriété(s) de l'instance
        this.glockBullet = glockBullet;
        this.CANNON = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.CANNON;
        this.world = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.map.world.world;
        this.currentDirectionGaze = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.playerState.currentDirectionGaze;
       
        // Instruction(s)
        this.getGlockCurrentPositionWorld = this.glockBullet.glockInteraction.glockAnimation.glock.getGlockCurrentPositionWorld();
        this.getGlockCurrentDirectionWorld = this.glockBullet.glockInteraction.glockAnimation.glock.getGlockCurrentDirectionWorld();
        this.createBulletBody();
    }

    createBulletBody()
    {
        // Le corps physique de la balle
        this.body = new this.CANNON.Body({
            mass: 0,
            // shape: new this.CANNON.Sphere(0)
        })

        // La position du corps physique de la balle à sa création
        this.body.position.set(this.getGlockCurrentPositionWorld.x + 0.368, this.getGlockCurrentPositionWorld.y + 0.135, this.getGlockCurrentPositionWorld.z - 0.6);

        // Ajouter le corps physique au monde
        this.world.addBody(this.body);
    }   
}