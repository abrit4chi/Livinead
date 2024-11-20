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
            shape: new this.CANNON.Box(new this.CANNON.Vec3(2, 3, 0.1)),
            position: new this.CANNON.Vec3(0, 0, 10),
            material: new this.CANNON.Material({
                restitution: 0, 
                friction: 0 
            })
        })

        this.world.addBody(this.body);
    }
}