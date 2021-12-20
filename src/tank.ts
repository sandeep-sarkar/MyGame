import "phaser";

export class Tank{
    x: number;
    y: number;
    imageLocation: string;
    name: string;
    scene: Phaser.Scene;
    tank: Phaser.Physics.Arcade.Image; 

    constructor(name: string, x: number, y: number, imageLocation: string, scene: Phaser.Scene){
        this.name = name;
        this.x = x;
        this.y = y;
        this.imageLocation = imageLocation;
        this.scene = scene;
    }

    init(){
        this.tank = this.scene.physics.add.image(this.x, this.y, this.name);
        this.tank.setInteractive;
        this.tank.setCollideWorldBounds(true);
    }

    stop(){
        this.tank.setVelocity(0);
    }
    moveLeft(){
        console.log("Move left");
        this.tank.setVelocityX(-100);   
    }
    moveRight(){
        this.tank.setVelocityX(100);
    }
}