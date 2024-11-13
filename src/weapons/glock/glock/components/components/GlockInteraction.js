import { GlockBullet } from './components/GlockBullet';

export class GlockInteraction {
    constructor(glockAnimation) 
    {
        // Propriétés de l'instance
        this.glockAnimation = glockAnimation;
        this.animations = this.glockAnimation.animations;

        // Donnée(s)
        this.bullets = [];
    }

    update()
    {
        this.shootInteraction();
        this.bullets.forEach((bullet) => bullet.update());
    }

    shootInteraction() {
        const animation = this.animations['Armature|Shoot'];
    
        if (animation) 
        {
            if (animation.isRunning()) 
            {
                if (this.lastShotTime === undefined || Date.now() - this.lastShotTime > 500) 
                {
                    this.bullets.push(new GlockBullet(this));
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