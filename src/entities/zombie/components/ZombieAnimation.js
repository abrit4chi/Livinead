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
        this.moveAnimation();
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

    moveAnimation() 
    {    
        const animation = this.animations['Zombie|ZombieRun'];
        animation.play();
    }

    deathAnimation()
    {
        const animation = this.animations['Zombie|ZombieCrawl'];

        if (this.zombie.zombieHealth.health == 0)
        {
            animation.setLoop(this.THREE.LoopOnce);
            animation.clampWhenFinished = true; // Garde la dernière image affichée
            animation.play();
            this.zombie.removeZombie();
        }
    }
}