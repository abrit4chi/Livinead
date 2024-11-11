export class LightBase {
    constructor(lights) 
    {
        // Propriétés de l'instance
        this.lights = lights;
        this.THREE = this.lights.map.game.THREE;
        this.scene = this.lights.map.game.scene.scene;

        // Instruction(s)
        this.createLightBase();
    }

    createLightBase()
    {
        // Création des lumières
        this.lightBase = new this.THREE.AmbientLight(0xffffff, 0.7);
        this.lightBase1 = new this.THREE.DirectionalLight(0xffffff, 1); // Simuler la lumière du soleil
        this.lightBase1.position.set(5, 10, 5); // Comme elle simule la lumière du soleil, on la positionne au dessus de la scène
        
        // L'ajouter à la scène
        this.scene.add(this.lightBase);
        this.scene.add(this.lightBase1);
    }
}