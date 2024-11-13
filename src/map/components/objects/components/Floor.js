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

        // Instruction(s)
        this.createVisualFloor();
        this.createFloorBody();
    }

    update()
    {
        this.mesh.position.copy(this.body.position);
    }

    createVisualFloor()
    {
        const geometry = new this.THREE.PlaneGeometry(this.width, this.height);
        const material = new this.THREE.MeshBasicMaterial();
        this.mesh = new this.THREE.Mesh(geometry, material);

        this.mesh.rotation.x = -Math.PI / 2;

        this.scene.add(this.mesh);
    }

    createFloorBody()
    {
        this.body = new this.CANNON.Body({
            type: this.CANNON.Body.STATIC,
            shape: new this.CANNON.Plane()
        });

        this.body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        this.world.addBody(this.body);
    }
}

