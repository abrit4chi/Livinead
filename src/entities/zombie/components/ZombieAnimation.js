import { Clock } from 'three';

export class ZombieAnimation {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.THREE = this.zombie.game.THREE;

        // Propriété(s)
        this.mixer = null; 
        this.animations = {};

        // Instance(s)
        this.clock = new Clock();
    }

    update()
    {
        this.updateMixer();
        this.idleAnimation();
    }

    loadAnimations(animations)
    {
        this.mixer = new this.THREE.AnimationMixer(this.zombie.zombie);

        // Enregistrer toutes les animations
        animations.forEach((clip) => {
            const action = this.mixer.clipAction(clip);
            this.animations[clip.name] = action;
        });
    }

    updateMixer()
    {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
    }

    idleAnimation() 
    {    
        const animation = this.animations['Zombie|ZombieIdle'];
        animation.play();
    }
}