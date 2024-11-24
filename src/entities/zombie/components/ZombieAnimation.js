import { Clock } from 'three';

export class ZombieAnimation {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.playerWeaponSystem = zombie.game.player.playerWeapon.playerWeaponSystem;
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
        this.deathAnimation();
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
        const animation = this.animations['Armature|Idle'];
        animation.play();
    }

    deathAnimation()
    {
        const animation = this.animations['Armature|Die'];

        if (this.zombie.zombieHealth.health == 0)
        {
            animation.setLoop(this.THREE.LoopOnce);
            animation.clampWhenFinished = true; // Garde la dernière image affichée
            animation.play();

            if (animation.time >= animation.getClip().duration - 1) {
                this.zombie.removeZombie();
            }
        }
    }
}