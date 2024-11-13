import { GlockBulletBody } from "./components/GlockBulletBody";

export class GlockBullet {
    constructor(glockInteraction)
    {
        // Propriété(s) de l'instance
        this.glockInteraction = glockInteraction;
        this.loaderModel = this.glockInteraction.glockAnimation.glock.loaderModel;
        this.scene = this.glockInteraction.glockAnimation.glock.playerWeapon.player.game.scene.scene;
        this.THREE = this.glockInteraction.glockAnimation.glock.playerWeapon.player.game.THREE;

        // Instruction(s)
        this.loaderBulletModel();
    }

    update()
    {
        if (this.bulletBody) this.copyBulletBodyPosition();
    }

    loaderBulletModel()
    {
        this.loaderModel.load('../../../../../../../assets/models/weapons/bullet.glb', (gltf) => {
            
            // Le modèle 3D
            this.bullet = gltf.scene;

            // Avoir le rayon du modèle
            this.getBulletRadius();

            // Créer un corps physique pour notre balle
            this.bulletBody = new GlockBulletBody(this);

            // Ajouter le modèle à la scène
            this.scene.add(this.bullet);
        })
    }

    getBulletRadius()
    {
        const bbox = new this.THREE.Box3().setFromObject(this.bullet);
        const size = new this.THREE.Vector3(); bbox.getSize(size);
        this.radius = Math.max(size.x, size.y, size.z) / 2;
    }

    copyBulletBodyPosition()
    {
        this.bullet.position.copy(this.bulletBody.body.position)
    }
}