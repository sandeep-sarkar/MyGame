import "phaser";

export class Tank{
    x: number;
    y: number;
    imageLocation: string;
    name: string;
    scene: Phaser.Scene;

    constructor(name: string, x: number, y: number, imageLocation: string, scene: Phaser.Scene){
        this.name = name;
        this.x = x;
        this.y = y;
        this.imageLocation = imageLocation;
        this.scene = scene;
    }

    init(){
        var tank: Phaser.Physics.Arcade.Image;
        tank = this.scene.physics.add.image(this.x, this.y, this.name);
        tank.setInteractive;
    }
}