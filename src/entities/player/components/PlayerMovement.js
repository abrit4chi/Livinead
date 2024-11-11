export class PlayerMovement {
    constructor(player) 
    {
        // Propriétés de l'instance
        this.player = player;
        this.playerState = this.player.playerState;
        this.cameraController = this.player.playerCameraController.cameraController;
        this.THREE = this.player.game.THREE;
        this.playerBody = this.player.playerBody.body;
    }

    update()
    {
        this.getCurrentDirectionGazePlayer();
        this.getRightSideCurrentDirectionGaze();
        this.move();
        this.jump();
    }

    getCurrentDirectionGazePlayer()
    {
        this.cameraController.getDirection(this.playerState.currentDirectionGaze);
    }

    getRightSideCurrentDirectionGaze()
    {
        this.playerState.rightSideCurrentDirectionGaze.crossVectors(this.playerState.currentDirectionGaze, new this.THREE.Vector3(0, 1, 0)).normalize();
    }

    move()
    {
        if (this.playerState.moveForward)
        {
            this.playerBody.velocity.x = this.playerState.currentDirectionGaze.x * this.playerState.moveSpeed;
            this.playerBody.velocity.z = this.playerState.currentDirectionGaze.z * this.playerState.moveSpeed;
        }
        else if (this.playerState.moveBackward)
        {
            this.playerBody.velocity.x = -this.playerState.currentDirectionGaze.x * this.playerState.moveSpeed;
            this.playerBody.velocity.z = -this.playerState.currentDirectionGaze.z * this.playerState.moveSpeed;
        }
        else 
        {
            this.playerBody.velocity.x = 0;
            this.playerBody.velocity.z = 0;
        }

        if (this.playerState.moveRight)
        {
            this.playerBody.velocity.x += this.playerState.rightSideCurrentDirectionGaze.x * this.playerState.moveSpeed;
            this.playerBody.velocity.z += this.playerState.rightSideCurrentDirectionGaze.z * this.playerState.moveSpeed;
        }
        else if (this.playerState.moveLeft)
        {
            this.playerBody.velocity.x -= this.playerState.rightSideCurrentDirectionGaze.x * this.playerState.moveSpeed;
            this.playerBody.velocity.z -= this.playerState.rightSideCurrentDirectionGaze.z * this.playerState.moveSpeed;
        }
    }

    jump()
    {
        if (this.playerState.jump && this.playerBody.position.y <= 1)
        {
            this.playerBody.velocity.y += this.playerState.jumpForce;
            this.playerState.jump = false;
        }
    }
}