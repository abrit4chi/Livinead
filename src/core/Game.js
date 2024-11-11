import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Import /Core
import { Scene } from './components/graphics/Scene';
import { Camera } from './components/graphics/Camera';
import { Renderer } from './components/graphics/Renderer';
import { Animator } from './Animator';
import { listenWindowResize } from './components/graphics/listenWindowResize';
import { AudioManager } from './components/audio/AudioManager';

// Import /Map
import { Map } from '../map/Map';

// Import /Entities
import { Player } from '../entities/player/Player';

export class Game {
    constructor()
    {
        this.THREE = THREE;
        this.CANNON = CANNON;

        // Instance(s)
        this.scene = new Scene(this);
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.audioManager = new AudioManager(this);
        this.map = new Map(this);
        this.player = new Player(this);
        this.animator = new Animator(this);

        // Instruction(s)
        this.animator.animate(this);
        listenWindowResize(this);
        this.scene.scene.add(this.camera.camera);
    }
}