export class Floor {
    constructor(objects) 
    {
        // Propriété(s) de l'instance
        this.objects = objects;
        this.THREE = this.objects.map.game.THREE;
        this.scene = this.objects.map.game.scene.scene;

        // Paramètre(s)
        this.width = 10;
        this.height = 10;

        // Instruction(s)
        this.createVisualFloor();
    }

    createVisualFloor()
    {
        const geometry = new this.THREE.PlaneGeometry(this.width, this.height);
        const material = new this.THREE.MeshBasicMaterial();

        // Le mesh est utilisé pour créer un objet 3D à partir d'une géométrie
        // et d'un matériau.
        const mesh = new this.THREE.Mesh(geometry, material);

        mesh.rotation.x = -Math.PI / 2;

        this.scene.add(mesh);
    }
}