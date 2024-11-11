export class PlayerState {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.THREE = player.game.THREE;

        // États
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;

        // Attributs physiques
        this.moveSpeed = 15;

        // Attributs spatiaux
        this.currentDirectionGaze = new this.THREE.Vector3();
        this.rightSideCurrentDirectionGaze = new this.THREE.Vector3();
    }
}