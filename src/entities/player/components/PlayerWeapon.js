import { Glock } from '../../../weapons/glock/glock/Glock';
import { PlayerWeaponAnimation } from './PlayerWeaponAnimation';
import { PlayerWeaponSound } from './PlayerWeaponSound';
import { PlayerWeaponSystem } from './PlayerWeaponSystem';

export class PlayerWeapon {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;

        // Instance(s)
        this.currentWeapon = new Glock(this);
        this.playerWeaponAnimation = new PlayerWeaponAnimation(this);
        this.playerWeaponSound = new PlayerWeaponSound(this);
        this.playerWeaponSystem = new PlayerWeaponSystem(this);
        
        // Instruction(s)
        this.currentWeapon.loadWeaponModel();
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
}