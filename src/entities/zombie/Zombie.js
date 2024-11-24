import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ZombieBody } from './components/ZombieBody';
import { ZombieAnimation } from './components/ZombieAnimation';
import { ZombieHealth } from './components/ZombieHealth';
import { ZombieDestroy } from './components/ZombieDestroy';
import { ZombieMovement } from './components/ZombieMovement';

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
        this.zombieHealth = new ZombieHealth(this);
        this.zombieDestroy = new ZombieDestroy(this);
        this.zombieMovement = new ZombieMovement(this);

        // Instruction(s)
        this.loadZombieModel();
    }

    
    loadZombieModel()
    {
        this.loaderModel.load('../../../assets/models/entities/zombie/zombie1.glb', (gltf) => {
            this.zombie = gltf.scene;
            
            // Echelle et position du zombie
            this.zombie.scale.set(0.3, 0.3, 0.3);
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
            if (this.zombieBody) this.zombie.position.copy(this.zombieBody.body.position);
            if (this.zombieAnimation) this.zombieAnimation.update();
            if (this.zombieHealth) this.zombieHealth.update();
            this.zombieMovement.update();
            this.zombieDestroy.update();
        }
    }
    
    removeZombie()
    {
        this.scene.remove(this.zombie);
    }
}