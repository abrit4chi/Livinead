export class PlayerRaycast {
    constructor(player) {
        // Propriétés de l'instance
        this.player = player;
        this.THREE = this.player.game.THREE;
        this.scene = this.player.game.scene.scene;
        this.playerBody = this.player.playerBody.body;
        this.playerCameraController = this.player.playerCameraController;
    }

    getTargetRaycast() {
        // Récupérer la position actuelle du joueur et la direction dans laquelle il regarde
        const playerPosition = new this.THREE.Vector3(this.playerBody.position.x, this.playerBody.position.y, this.playerBody.position.z - 0.1);
        const playerCameraDirection = this.playerCameraController.getPlayerCameraDirection();
        
        // Initialiser le raycaster
        const raycaster = new this.THREE.Raycaster(playerPosition, playerCameraDirection);

        // Récupérer les intersections (quand le endPoint touche une entité)
        const intersections = raycaster.intersectObject(this.scene, true);

        // Vérifier si le raycast a touché un objet
        if (intersections.length > 0) {
            return intersections[0].object.name;
        }
    }
}
