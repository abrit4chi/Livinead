export class ZombieDestroy {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
    }

    update()
    {
        this.destroy();
    }

    destroy()
    {
        if (this.zombie.zombieHealth.health == 0)
        {
            // Supprimer le corps physique du zombie
            this.zombie.zombieBody.removeZombieBody();
        }
    }
}