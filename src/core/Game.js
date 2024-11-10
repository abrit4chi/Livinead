import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Import /Core
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { Animator } from './Animator';
import { listenWindowResize } from './graphics/listenWindowResize';

// Import /Map
import { Map } from '../map/Map';

export class Game {
    constructor()
    {
        this.THREE = THREE;
        this.CANNON = CANNON;

        // Instance(s)
        this.scene = new Scene(this);
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.animator = new Animator(this);
        this.map = new Map(this);

        // Instruction(s)
        this.animator.animate(this);
        listenWindowResize(this);
    }
}