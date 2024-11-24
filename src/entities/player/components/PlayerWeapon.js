import { Glock } from '../../../weapons/glock/Glock';
import { Akm } from '../../../weapons/akm/Akm';
import { PlayerWeaponAnimation } from './PlayerWeaponAnimation';
import { PlayerWeaponSound } from './PlayerWeaponSound';
import { PlayerWeaponSystem } from './PlayerWeaponSystem';

export class PlayerWeapon {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;

        // Instance(s)
        // this.currentWeapon = new Glock(this);
        this.currentWeapon = new Akm(this);
        this.playerWeaponAnimation = new PlayerWeaponAnimation(this);
        this.playerWeaponSound = new PlayerWeaponSound(this);
        this.playerWeaponSystem = new PlayerWeaponSystem(this);
        
        // Instruction(s)
        this.currentWeapon.loadWeaponModel();
        this.createCrosshair();
    }

    update()
    {
        if (this.currentWeapon.weapon)
        {
            this.playerWeaponAnimation.update();
            this.playerWeaponSound.update();
            this.playerWeaponSystem.update();
        }
    }

    createCrosshair()
    {
        if (!document.querySelector('.crosshair'))
        {
            this.crosshair = document.createElement('img');
            this.crosshair.className = 'crosshair';
            this.crosshair.src = './assets/images/crosshair.png';
            document.body.appendChild(this.crosshair);
        }
    }

    removeCrosshair()
    {
        if (document.querySelector('.crosshair'))
        {
            document.querySelector('.crosshair').remove();
        }
    }

    createHitCrosshair()
    {
        if (!document.querySelector('.hitCrosshair'))
        {
            this.hitCrosshair = document.createElement('img');
            this.hitCrosshair.className = 'hitCrosshair';
            this.hitCrosshair.src = './assets/images/hitCrosshair1.png';
            document.body.appendChild(this.hitCrosshair);
        }

        setTimeout(() => {
            if (document.querySelector('.hitCrosshair')) document.querySelector('.hitCrosshair').remove();
        }, 100);
    }
}