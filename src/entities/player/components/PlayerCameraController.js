import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export class PlayerCameraController {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.camera = this.player.game.camera.camera;
        this.renderer = this.player.game.renderer.renderer;
        this.THREE = this.player.game.THREE;

        // Instruction(s)
        this.createPlayerCameraController();
    }

    createPlayerCameraController()
    {
        // Instance(s)
        this.cameraController = new PointerLockControls(this.camera, this.renderer.domElement);

        // Instruction(s)
        document.addEventListener('click', () => {
            this.cameraController.lock();
        });
    }

    getPlayerCameraDirection()
    {
        const direction = new this.THREE.Vector3();
        this.camera.getWorldDirection(direction);

        return direction;
    }
}