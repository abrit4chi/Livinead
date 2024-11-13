export class GlockBulletBody {
    constructor(glockBullet) 
    {
        // Propriété(s) de l'instance
        this.glockBullet = glockBullet;
        this.CANNON = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.CANNON;
        this.world = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.map.world.world;

        // Instruction(s)
        this.createBulletBody();
    }

    createBulletBody()
    {
        // Le corps physique de la balle
        this.body = new this.CANNON.Body({
            mass: 0.1,
            shape: new this.CANNON.Sphere(this.glockBullet.radius)
        })

        // La position du corps physique de la balle à sa création
        this.body.position.set(0, 5, -5);

        // Ajouter le corps physique au monde
        this.world.addBody(this.body);
    }   
}