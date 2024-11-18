export class Cube {
    constructor(objects) 
    {
        // Propriété(s) de l'instance
        this.objects = objects;
        this.THREE = this.objects.map.game.THREE;
        this.scene = this.objects.map.game.scene.scene;

        // Instruction(s)
        this.createVisualCube();
    }

    createVisualCube()
    {
        const geometry = new this.THREE.BoxGeometry();
        const material = new this.THREE.MeshBasicMaterial({color: '#ff10ff'});
        const mesh = new this.THREE.Mesh(geometry, material);

        mesh.name = 'cube';
        mesh.position.y = 0.5;

        this.scene.add(mesh);
    }
}