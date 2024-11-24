import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Akm {
    constructor(playerWeapon)
    {
        // Propriétés de l'instance
        this.playerWeapon = playerWeapon;
        this.camera = this.playerWeapon.player.game.camera.camera;
        this.audioManager = this.playerWeapon.player.game.audioManager;

        // Instance(s)
        this.loaderModel = new GLTFLoader();

        // Charger les sons
        this.audioManager.loadSound('aimAkm', '../../../../../assets/sounds/weapons/glock/aim.mp3', false, false, 0.02, 1);
        this.audioManager.loadSound('reloadAkm', '../../../../../assets/sounds/weapons/glock/reload.mp3', false, false, 0.1, 1);
        // this.audioManager.loadSound('shootAkm', '../../../../../assets/sounds/weapons/glock/shoot.mp3', false, false, 0.10, 0.9);
        this.audioManager.loadSound('hitAkm', '../../../../../assets/sounds/weapons/hitmarker.mp3', false, false, 4, 1);

        // Propriété(s)
        this.sounds = {
            0: 'aimAkm',
            1: 'shootAkm',
            2: 'reloadAkm',
            3: 'hitAkm'
        };
        this.idlePositionData = [0.1, -0.4, -0.5];
        this.aimPositionData = [-0.176, -0.3, -0.6];
        this.fireRate = 160;
    }
    
    loadWeaponModel()
    {
        this.loaderModel.load('../../../assets/models/weapons/akm/akm.glb', (gltf) => {
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