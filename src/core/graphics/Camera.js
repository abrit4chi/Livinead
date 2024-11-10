export class Camera {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.THREE = this.game.THREE;

        // Instruction(s)
        this.createCamera();
    }

    createCamera()
    {
        // Instance(s)
        this.camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
        
        // Instruction(s)
        this.camera.position.set(0, 1, 0);
    }
}