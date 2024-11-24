export class ZombieHealth {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.playerWeaponSystem = zombie.game.player.playerWeapon.playerWeaponSystem;
        this.scene = this.zombie.game.scene.scene;

        // Propriété(s)
        this.health = 100;
    }

    update()
    {
        this.takeDamage();
    }

    takeDamage()
    {
        if (this.playerWeaponSystem.hitFlag && this.health > 0)
        {
            this.health -= 20;
        }
    }
}