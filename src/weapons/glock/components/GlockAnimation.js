import { Clock } from 'three';
import { GlockSound } from './components/GlockSound';

export class GlockAnimation {
    constructor(glock) 
    {
        // Propriétés de l'instance
        this.glock = glock;
        this.THREE = this.glock.playerWeapon.player.game.THREE;
        this.playerState = this.glock.playerWeapon.player.playerState;
        this.audioManager = this.glock.playerWeapon.player.game.audioManager;
           
        // Donnée(s)
        this.mixer = null; 
        this.animations = {};
        
        // Instance(s)
        this.clock = new Clock();
        this.glockSound = new GlockSound(this);
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
        this.aimAnimation();
        this.reloadAnimation();
        this.glockSound.update();
    }

    updateMixer()
    {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
    }

    aimAnimation()
    {
        if (this.glock.glock)
        {
            if (this.playerState.aim)
            {
                this.glock.glock.position.set(-0.366, -0.23, -0.35);
            }
            else 
            {
                this.glock.glock.position.set(-0.2, -0.3, -0.35);
            }
        }
    }

    reloadAnimation()
    {
        const animation = this.animations['Armature|Reload'];
        
        if (this.playerState.reload)
        {
            if (!animation.isRunning())
            {
                // Paramètres de l'animation
                animation.reset();
                animation.setLoop(this.THREE.LoopOnce);
                animation.play();
            }

            this.playerState.reload = false;
        }
    }
}