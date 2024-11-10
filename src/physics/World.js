export class World {
    constructor(map) 
    {
        // Propriété(s) de l'instance
        this.map = map;
        this.CANNON = this.map.game.CANNON;

        // Instruction(s)
        this.createWorld();
    }

    createWorld()
    {
        // Instance(s)
        this.world = new this.CANNON.World();

        // Instruction(s)
        this.world.gravity.set(0, -10, 0);
    }
}