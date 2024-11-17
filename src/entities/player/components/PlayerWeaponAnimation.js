import { Clock } from 'three';

export class PlayerWeaponAnimation {
    constructor(playerWeapon) 
    {
        // Propriété(s) de l'instance
        this.playerWeapon = playerWeapon;
        this.THREE = this.playerWeapon.player.game.THREE;
        this.playerState = this.playerWeapon.player.playerState;
        this.weapon = this.playerWeapon.currentWeapon;

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
        this.aimAnimation();
        this.shootAnimation();
        this.reloadAnimation();
    }

    loadAnimations(animations)
    {
        this.mixer = new this.THREE.AnimationMixer(this.weapon.weapon);

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
        const animationReload = this.animations['Armature|Reload'];
        const animationShoot = this.animations['Armature|Shoot'];
    
        if (!animationReload.isRunning() && !animationShoot.isRunning()) 
        {
            if (!animation.isRunning()) 
            {
                Object.values(this.animations).forEach((otherAnimation) => 
                {
                    if (otherAnimation !== animation) 
                    {
                        otherAnimation.crossFadeTo(animation, 1, false);
                    }
                });
                animation.play();
            }
        } 
        else 
        {
            animation.stop();
        }
    }

    aimAnimation()
    {
        if (this.playerState.aim)
        {
            this.weapon.weapon.position.set(this.weapon.aimPositionData[0], this.weapon.aimPositionData[1], this.weapon.aimPositionData[2]);
        }
        else 
        {
            this.weapon.weapon.position.set(this.weapon.idlePositionData[0], this.weapon.idlePositionData[1], this.weapon.idlePositionData[2]);
        }
    }

    shootAnimation()
    {
        const animation = this.animations['Armature|Shoot'];
        const animationReload = this.animations['Armature|Reload'];
        
        if (this.playerState.shoot)
        {            
            if (!animation.isRunning() && !animationReload.isRunning())
            {
                // Paramètres de l'animation
                animation.reset();
                animation.setLoop(this.THREE.LoopOnce);
                animation.play();
            }
        }
    }

    reloadAnimation()
    {
        const animation = this.animations['Armature|Reload'];
        const animationShoot = this.animations['Armature|Shoot'];
        
        if (this.playerState.reload)
        {
            if (!animation.isRunning() && !animationShoot.isRunning())
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