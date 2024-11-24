export class ZombieMovement {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.THREE = this.zombie.game.THREE;
        this.playerBody = this.zombie.game.player.playerBody.body;
    }

    update()
    {
        this.lookPlayer();
    }

    lookPlayer()
    {
        // this.zombie.zombie.rotation.y += 0.01;
    }
}