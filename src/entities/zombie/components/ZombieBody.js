export class ZombieBody {
    constructor(zombie) 
    {
        // Propriété(s) de l'instance
        this.zombie = zombie;
        this.CANNON = this.zombie.game.CANNON;
        this.world = this.zombie.game.map.world.world;

        // Instruction(s)
        this.createZombieBody();
    }

    createZombieBody()
    {
        this.body = new this.CANNON.Body({
            mass: 0,
            shape: new this.CANNON.Sphere(1),
            position: new this.CANNON.Vec3(0, 0, 10)
        })

        this.world.addBody(this.body);
    }
}