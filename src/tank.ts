import "phaser";
import { Bullet } from "./bullet";

export class Tank{
    x: number;
    y: number;
    imageLocation: string;
    name: string;
    scene: Phaser.Scene;
    tank: Phaser.Physics.Arcade.Image;
    bullet: Bullet;

    constructor(name: string, x: number, y: number, imageLocation: string, scene: Phaser.Scene){
        this.name = name;
        this.x = x;
        this.y = y;
        this.imageLocation = imageLocation;
        this.scene = scene;
    }

    init(){
        this.x = this.scene.cameras.main.width / 2;
        if (this.name == "goodTank"){
            this.y = this.scene.cameras.main.height - 70;
        }
        this.tank = this.scene.physics.add.image(this.x, this.y, this.name);
        this.tank.setInteractive;
        this.tank.setCollideWorldBounds(true);
    }

    setBullet(bullet: Bullet){
        this.bullet = bullet;
    }

    stop(){
        this.tank.setVelocity(0);
    }
    moveLeft(){
        this.tank.setVelocityX(-100); 
    }
    moveRight(){
        this.tank.setVelocityX(100);
    }

    moveFront(){
        this.tank.setVelocityY(100);
    }

    shoot(){
        var x = this.tank.originX;
        var y = this.tank.originY;
        this.bullet.shoot(x, y);
    }
    
}