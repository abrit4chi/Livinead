import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GlockAnimation } from './components/GlockAnimation';

export class Glock {
    constructor(playerWeapon)
    {
        // Propriétés de l'instance
        this.playerWeapon = playerWeapon;
        this.camera = this.playerWeapon.player.game.camera.camera;
        this.THREE = this.playerWeapon.player.game.THREE;

        // Instance(s)
        this.loaderModel = new GLTFLoader();
        this.glockAnimation = new GlockAnimation(this);

        // Instruction(s)
        this.loadGlockModel();
    }

    update()
    {
        if (this.glock)
        {
            this.glockAnimation.update();
        }
    }
    
    loadGlockModel()
    {
        this.loaderModel.load('../../../assets/models/weapons/glock/glock.glb', (gltf) => {
            this.glock = gltf.scene;

            // Echelle, position et rotation de l'arme
            this.glock.scale.set(0.1, 0.1, 0.1);
            this.glock.rotation.y = Math.PI / 2;
            this.glock.position.set(-0.2, -0.3, -0.35);

            // Ajouter en tant qu'enfant à la caméra
            this.camera.add(this.glock);

            // Charger les animations et le raycaster du Glock
            this.glockAnimation.loadAnimations(gltf.animations);
        })
    }


    getGlockCurrentPositionWorld()
    {
        return this.glock.getWorldPosition(new this.THREE.Vector3());
    }

    getGlockCurrentDirectionWorld()
    {
        return this.glock.getWorldDirection(new this.THREE.Vector3());
    }
}