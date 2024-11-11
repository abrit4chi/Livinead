export class Scene {
    constructor(game)
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.THREE = this.game.THREE;

        // Instruction(s)
        this.createScene();
    }

    createScene()
    {
        // Instance(s)
        this.scene = new this.THREE.Scene();
    }
}