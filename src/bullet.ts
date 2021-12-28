import "phaser";

export class Bullet extends Phaser.Physics.Arcade.Sprite{
    name: string;
    scene: Phaser.Scene;
    imageLocation: string;
    bulletImage: Phaser.Physics.Arcade.Image;

    constructor(name:string, x:number, y:number, location:string, scene:Phaser.Scene){
        super(scene, x, y, name);
        this.name = name;
        this.imageLocation = location;
        this.scene = scene;
        this.bulletImage = this.scene.physics.add.image(0,0, this.name);
        this.bulletImage.setSize(10,20);
    }

    shoot(x: number, y:number){
        this.body.reset(x, y);
        this.setActive(true);
        this.setVelocityY(200);
    }
}