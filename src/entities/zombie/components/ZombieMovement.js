export class ZombieMovement {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.THREE = this.zombie.game.THREE;
        this.playerBodyPosition = this.zombie.game.player.playerBody.body.position;
        this.zombieBody = this.zombie.zombieBody.body;
    }

    update()
    {
        if (this.zombie.zombieHealth.health > 0)
        {
            this.lookTowardsPlayer();
            this.moveTowardsPlayer();
        }
    }

    lookTowardsPlayer() {
        
        // Récupère la position actuelle du zombie et du joueur
        const zombiePosition = this.zombie.zombie.position;
        const playerPosition = this.playerBodyPosition;
    
        // Calcule le vecteur directionnel entre le zombie et le joueur
        this.direction = new this.THREE.Vector3(
            playerPosition.x - zombiePosition.x,
            0,
            playerPosition.z - zombiePosition.z
        );
    
        // Normalise le vecteur directionnel
        this.direction.normalize();

        // Met à jour l'orientation du zombie
        this.zombie.zombie.rotation.y = Math.atan2(this.direction.x, this.direction.z);
    }

    moveTowardsPlayer()
    {
        const speed = 0.07;
        this.zombieBody.position.x += this.direction.x * speed;
        this.zombieBody.position.z += this.direction.z * speed;
    }
}