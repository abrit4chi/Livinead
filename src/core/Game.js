import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Import /Core
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { Animator } from './Animator';
import { listenWindowResize } from './graphics/listenWindowResize';
import { AudioManager } from './audio/AudioManager';

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
    }
}