import { GlockBullet } from './components/GlockBullet';

export class GlockInteraction {
    constructor(glockAnimation) 
    {
        // Propriétés de l'instance
        this.glockAnimation = glockAnimation;
        this.animations = this.glockAnimation.animations;

        // Donnée(s)
        this.bullets = [];

        // Drapeau pour la balle
        this.bulletFlag = false;
    }

    update()
    {
        this.shootInteraction();
        this.bullets.forEach((bullet) => bullet.update());
    }

    shootInteraction()
    {
        const animation = this.animations['Armature|Shoot'];
        
        if (animation)
        {
            if (this.animations['Armature|Shoot'].isRunning() && !this.bulletFlag)
            {
                this.glockBullet = new GlockBullet(this);
                this.bullets.push(this.glockBullet);
                this.bulletFlag = true;
            }
            else if (!this.animations['Armature|Shoot'].isRunning())
            {
                this.bulletFlag = false;
            }
        }
    }
}