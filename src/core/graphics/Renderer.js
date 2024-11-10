export class Renderer {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.THREE = this.game.THREE;

        // Instruction(s)
        this.createRenderer();
    }

    createRenderer()
    {
        // Instance(s)
        this.renderer = new this.THREE.WebGLRenderer();

        // Instruction(s)
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new this.THREE.Color('skyblue'));
        document.body.appendChild(this.renderer.domElement);
    }
}