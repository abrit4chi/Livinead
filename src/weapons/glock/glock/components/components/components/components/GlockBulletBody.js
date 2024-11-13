export class GlockBulletBody {
    constructor(glockBullet) 
    {
        // Propriété(s) de l'instance
        this.glockBullet = glockBullet;
        this.CANNON = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.CANNON;
        this.world = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.map.world.world;

        // Instruction(s)
        this.createBulletBody();
        // this.addCollisionEvent();
    }

    createBulletBody()
    {
        // Le corps physique de la balle
        this.body = new this.CANNON.Body({
            mass: 1,
            shape: new this.CANNON.Sphere(0.01)
        })

        // La position du corps physique de la balle à sa création
        this.body.position.set(0, 5, -2);

        // Ajouter le corps physique au monde
        this.world.addBody(this.body);
    }   

    // addCollisionEvent() {
    //     // Écoute l'événement de collision sur le corps de la balle
    //     this.body.addEventListener("collide", (event) => {
    //         // L'objet avec lequel la balle est entrée en collision
    //         const collidedWith = event.body;

    //         // Vérifie si la balle a touché le zombie (par exemple, en comparant avec zombieBody)
    //         if (collidedWith === this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.playerBody.body) {
    //             console.log("Collision détectée avec le zombie!");
    //             // Ajouter ici la logique de réaction (dégâts, effets, etc.)
    //         }
    //         else 
    //         {
    //             console.log('ok')
    //         }
    //     });
    // }
}