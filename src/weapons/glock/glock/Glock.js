import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Glock {
    constructor(playerWeapon)
    {
        // Propriétés de l'instance
        this.playerWeapon = playerWeapon;
        this.camera = this.playerWeapon.player.game.camera.camera;
        this.audioManager = this.playerWeapon.player.game.audioManager;

        // Instance(s)
        this.loaderModel = new GLTFLoader();

        // Charger les sons
        this.audioManager.loadSound('aimGlock', '../../../../assets/sounds/weapons/glock/aim.mp3', false, false, 0.02, 1);
        this.audioManager.loadSound('reloadGlock', '../../../../assets/sounds/weapons/glock/reload.mp3', false, false, 0.1, 1.1);
        this.audioManager.loadSound('shootGlock', '../../../../assets/sounds/weapons/glock/shoot.mp3', false, false, 0.10, 0.9);
        this.audioManager.loadSound('hitGlock', '../../../../assets/sounds/weapons/hitmarker.mp3', false, false, 4, 1);

        // Propriété(s)
        this.sounds = {
            0: 'aimGlock',
            1: 'shootGlock',
            2: 'reloadGlock'
        };
        this.idlePositionData = [-0.2, -0.3, -0.35]
        this.aimPositionData = [-0.366, -0.2185, -0.30]
    }
    
    loadWeaponModel()
    {
        this.loaderModel.load('../../../assets/models/weapons/glock/glock.glb', (gltf) => {
            this.weapon = gltf.scene;

            // Echelle, position et rotation de l'arme
            this.weapon.scale.set(0.1, 0.1, 0.1);
            this.weapon.rotation.y = Math.PI / 2;
            this.weapon.position.set(-0.2, -0.3, -0.35);

            // Ajouter en tant qu'enfant à la caméra
            this.camera.add(this.weapon);

            // Charger les animations du Glock
            this.playerWeapon.playerWeaponAnimation.loadAnimations(gltf.animations);
        })
    }
}