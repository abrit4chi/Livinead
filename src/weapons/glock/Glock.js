import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Glock {
    constructor(playerWeapon)
    {
        // Propriétés de l'instance
        this.playerWeapon = playerWeapon;
        this.camera = this.playerWeapon.player.game.camera.camera;

        // Instance(s)
        this.loaderModel = new GLTFLoader();

        // Instruction(s)
        this.loadGlockModel();
    }

    loadGlockModel()
    {
        this.loaderModel.load('../../../assets/models/weapons/glock.glb', (gltf) => {
            this.glock = gltf.scene;

            // Echelle, position et rotation de l'arme
            this.glock.scale.set(0.1, 0.1, 0.1);
            this.glock.rotation.y = Math.PI / 2;
            this.glock.position.set(-0.2, -0.3, -0.35);

            // Ajouter en tant qu'enfant à la caméra
            this.camera.add(this.glock);
        })
    }
}