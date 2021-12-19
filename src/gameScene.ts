import "phaser";
import {Tank} from "./tank";

export class GameScene extends Phaser.Scene {
    delta: Number;
    lastStarTime: Number;
    starsCaught: Number;
    starsFallen: number;
    wall: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;
    cursorkeys: Phaser.Types.Input.Keyboard.CursorKeys;
    goodTank: Tank;

    constructor(){
        super({
            key:"GameScene"
        });
    }
    
    init(/*params: any*/): void{
        this.delta = 1000;
        this.lastStarTime = 0;
        this.starsCaught = 0;
        this.starsFallen = 0;
        this.goodTank = new Tank("goodTank", 400, 530, "assets/tank.png", this);
    }

    preload(): void{
        //this.load.setBaseURL
        this.load.image("wall", "assets/wall.png");
        this.load.image(this.goodTank.name, this.goodTank.imageLocation);
    }

    create(): void{
        this.wall = this.physics.add.staticGroup({
            key: "wall",
            frameQuantity: 20
        });
        Phaser.Actions.PlaceOnLine(this.wall.getChildren(),
            new Phaser.Geom.Line(20, 580, 820, 580));
        this.wall.refresh();
        this.info = this.add.text(10, 10, '',
            {font: '24px Ariel Bold'});
        this.cursorkeys = this.input.keyboard.createCursorKeys();
    }

    update(time): void{
        //add tank to the scene
        this.goodTank.init();
    }

    /** 
    private createTank():void{
        var tank: Phaser.Physics.Arcade.Image;
        var x = 400;
        var y = 530;
        tank = this.physics.add.image(x, y, "tank");
        tank.setInteractive();
    }
    **/

};