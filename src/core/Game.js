import * as THREE from 'three';

// L'import des classe(s) et fonction(s) de /Core
import { Scene } from './graphics/Scene';
import { Camera } from './graphics/Camera';
import { Renderer } from './graphics/Renderer';
import { Animator } from './Animator';
import { resizeListener } from './graphics/resizeListener';

export class Game {
    constructor()
    {
        this.THREE = THREE;

        // Instance(s)
        this.scene = new Scene(this);
        this.camera = new Camera(this);
        this.renderer = new Renderer(this);
        this.animator = new Animator(this);

        // Instruction(s)
        this.animator.animate(this);
        resizeListener(this);
    }
}