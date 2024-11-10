export class Animator {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.scene = this.game.scene.scene;
        this.camera = this.game.camera.camera;
        this.renderer = this.game.renderer.renderer;

        // Instruction(s)
        this.animate = this.animate.bind(this);
    }

    animate()
    {
        // Boucle d'animation
        requestAnimationFrame(this.animate);

        // Le rendu
        this.renderer.render(this.scene, this.camera);
    }
}