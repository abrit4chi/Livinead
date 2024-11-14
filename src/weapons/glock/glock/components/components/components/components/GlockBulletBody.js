export class GlockBulletBody {
    constructor(glockBullet) 
    {
        // Propriété(s) de l'instance
        this.glockBullet = glockBullet;
        this.THREE = this.glockBullet.glockInteraction.glockAnimation.glock.playerWeapon.player.game.THREE;
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
        this.body = new this.CANNON.Body({
            mass: 0
        });

        // Placer la balle devant le glock et dans la direction où il regarde
        const bulletPosition = new this.THREE.Vector3();
        bulletPosition.copy(this.getGlockCurrentPositionWorld.add(this.getGlockCurrentDirectionWorld.clone().multiplyScalar(0.368)));
        this.body.position.set(bulletPosition.x, bulletPosition.y + 0.14, bulletPosition.z);

        this.world.addBody(this.body);
    }
}