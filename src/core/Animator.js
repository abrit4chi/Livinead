export class Animator {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.scene = this.game.scene.scene;
        this.camera = this.game.camera;
        this.renderer = this.game.renderer.renderer;
        this.world = this.game.map.world.world;
        this.player = this.game.player;
        this.zombie = this.game.zombie;

        // Instruction(s)
        this.animate = this.animate.bind(this);
    }

    animate()
    {
        // Boucle d'animation
        requestAnimationFrame(this.animate);

        // Le monde physique
        this.world.step(1 / 60);

        // Le joueur
        this.player.update();

        // Le zombie
        this.zombie.update();
        
        // La caméra
        this.camera.update();

        // Le rendu
        this.renderer.render(this.scene, this.camera.camera);
    }
}