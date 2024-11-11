import { Clock } from 'three';

export class GlockAnimation {
    constructor(glock) 
    {
        // Propriétés de l'instance
        this.glock = glock;
        this.THREE = this.glock.playerWeapon.player.game.THREE;

        // Instance(s)
        this.clock = new Clock();

        // Le mixer et les animations
        this.mixer = null; 
        this.animations = {};
    }

    loadAnimations(animations)
    {
        this.mixer = new this.THREE.AnimationMixer(this.glock.glock);

        // Enregistrer toutes les animations
        animations.forEach((clip) => {
            const action = this.mixer.clipAction(clip);
            this.animations[clip.name] = action;
        });
    }

    update()
    {
        this.updateMixer();
    }

    updateMixer()
    {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
    }
}