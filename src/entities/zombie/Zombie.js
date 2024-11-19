import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ZombieBody } from './components/ZombieBody';
import { ZombieAnimation } from './components/ZombieAnimation';

export class Zombie {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.scene = this.game.scene.scene;

        // Instance(s)
        this.loaderModel = new GLTFLoader();
        this.zombieBody = new ZombieBody(this);
        this.zombieAnimation = new ZombieAnimation(this);

        // Instruction(s)
        this.loadZombieModel();
    }

    loadZombieModel()
    {
        this.loaderModel.load('../../../assets/models/entities/zombie/zombie.glb', (gltf) => {
            this.zombie = gltf.scene;

            // Echelle et position du zombie
            this.zombie.scale.set(0.23, 0.175, 0.19);
            this.zombie.position.set(1, 0, 2);

            // L'ajouter à la scène
            this.scene.add(this.zombie)

            // Charger les animations
            this.zombieAnimation.loadAnimations(gltf.animations);
        })
    }

    update()
    {
        if (this.zombie)
        {
            this.zombie.position.copy(this.zombieBody.body.position)
            this.zombieAnimation.update();
        }
    }
}