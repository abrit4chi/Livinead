import { Glock } from '../../../weapons/glock/Glock';

export class PlayerWeapon {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;

        // Instance(s)
        this.currentWeapon = new Glock(this);
    }
}