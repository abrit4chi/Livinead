export class Floor {
    constructor(objects) 
    {
        // Propriété(s) de l'instance
        this.objects = objects;
        this.THREE = this.objects.map.game.THREE;
        this.scene = this.objects.map.game.scene.scene;
        this.CANNON = this.objects.map.game.CANNON;
        this.world = this.objects.map.world.world;

        // Paramètre(s)
        this.width = 10;
        this.height = 10;
        this.mass = 0;

        // Instruction(s)
        this.createVisualFloor();
        this.createFloorBody();
    }

    createVisualFloor()
    {
        const geometry = new this.THREE.PlaneGeometry(this.width, this.height);
        const material = new this.THREE.MeshBasicMaterial();

        // Le mesh est utilisé pour créer un objet 3D à partir d'une géométrie
        // et d'un matériau.
        const mesh = new this.THREE.Mesh(geometry, material);

        // Rotation pour que le sol soit horizontal et position pour que le sol soit synchronisé avec le corps physique du sol
        mesh.rotation.x = -Math.PI / 2;

        this.scene.add(mesh);
    }

    createFloorBody()
    {
        const body = new this.CANNON.Body({
            mass: this.mass,
            shape: new this.CANNON.Plane()
        });

        // Rotation pour que le sol soit horizontal
        body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        this.world.addBody(body);
    }
}

