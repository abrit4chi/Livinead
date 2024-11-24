export class PlayerBody {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.CANNON = this.player.game.CANNON;
        this.world = this.player.game.map.world.world;

        // Instruction(s)
        this.createPlayerBody();
    }

    createPlayerBody()
    {
        this.body = new this.CANNON.Body({
            mass: 1,
            shape: new this.CANNON.Sphere(1),
            position: new this.CANNON.Vec3(0, 1, 15),
            material: new this.CANNON.Material({
                restitution: 0,
                friction: 0 
            })
        })

        this.world.addBody(this.body);
    }
}