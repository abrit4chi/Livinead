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
        this.jump = false;

        // Attributs physiques
        this.moveSpeed = 15;
        this.jumpForce = 5;

        // Attributs spatiaux
        this.currentDirectionGaze = new this.THREE.Vector3();
        this.rightSideCurrentDirectionGaze = new this.THREE.Vector3();
    }
}