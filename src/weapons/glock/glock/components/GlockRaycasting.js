export class GlockRaycasting {
    constructor(glock) 
    {
        // Propriété(s) de l'instance
        this.glock = glock;
        this.THREE = this.glock.playerWeapon.player.game.THREE;
        this.scene = this.glock.playerWeapon.player.game.scene.scene;
        this.camera = this.glock.playerWeapon.player.game.camera.camera;

        // Instance(s)
        this.raycaster = new this.THREE.Raycaster();

        // Propriété(s)
        this.intersectedObjects = [];

        // Géométrie et matériau pour la ligne du rayon
        this.rayGeometry = new this.THREE.BufferGeometry().setFromPoints([new this.THREE.Vector3(), new this.THREE.Vector3()]);
        this.rayMaterial = new this.THREE.LineBasicMaterial({ color: 0xff0000 }); // Rouge pour le test
        this.rayLine = new this.THREE.Line(this.rayGeometry, this.rayMaterial);

        // Ajoute la ligne à la scène pour qu'elle soit visible
        this.scene.add(this.rayLine);
    }

    update()
    {
        this.raycasting();
    }

    raycasting()
    {
        // Récupérer la position et direction actuelle du Glock
        this.currentGlockPosition = this.glock.getGlockCurrentPositionWorld();
        this.currentGlockPosition.z -= 1; 
        this.currentGlockPosition.x += 0.26; 
        // this.currentGlockDirection = this.glock.getGlockCurrentDirectionWorld();
        this.cameraDirection = new this.THREE.Vector3();
        this.camera.getWorldDirection(this.cameraDirection);

        // Mettre à jour l'origine et la direction du raycaster chaque fois
        // que le glock bouge et change de direction
        this.raycaster.ray.origin.copy(this.currentGlockPosition);
        this.raycaster.ray.direction.copy(this.cameraDirection);

        // Calculer la position de fin du rayon
        const endPoint = this.currentGlockPosition.clone().add(this.cameraDirection.clone().multiplyScalar(1));

        // Mettre à jour les points de la géométrie de la ligne
        this.rayGeometry.setFromPoints([this.currentGlockPosition, endPoint]);

        // Détection des intersections
        this.intersectedObjects = this.raycaster.intersectObject(this.scene, true);

         // Filtrer les objets invisibles ou sans nom
    this.intersectedObjects = this.intersectedObjects.filter(intersect => {
        const object = intersect.object;
        return object.visible && object.name; // Garder seulement les objets visibles avec un nom
    });

        if (this.intersectedObjects.length > 0) {
            console.log(this.intersectedObjects[0].object.name)
        }
    }
}