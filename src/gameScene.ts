import "phaser";
import {Tank} from "./tank";

export class GameScene extends Phaser.Scene {
    delta: Number;
    wall: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;
    cursorkeys: Phaser.Types.Input.Keyboard.CursorKeys;
    goodTank: Tank;
    badTank: Tank;
    startGame: boolean;

    constructor(){
        super({
            key:"GameScene"
        });
        this.startGame = false;
    }
    
    init(/*params: any*/): void{
        this.delta = 1000;
        this.goodTank = new Tank("goodTank", 400, 530, "assets/tank.png", this);
        this.badTank = new Tank("badTank", 400,20, "assets/tank_2.png", this);
    }

    preload(): void{
        //this.load.setBaseURL
        this.load.image("wall", "assets/wall.png");
        this.load.image(this.goodTank.name, this.goodTank.imageLocation);
        this.load.image(this.badTank.name, this.badTank.imageLocation);
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
        this.goodTank.init();
        this.badTank.init();
    }

    update(time): void{
        //add tank to the scene
        
        this.goodTank.stop();
        if (this.startGame == true){
            this.badTank.moveFront();
        }

        if (this.cursorkeys.left.isDown){
            this.startGame = true;
            this.goodTank.moveLeft();
        }
        if (this.cursorkeys.right.isDown){
            this.startGame = true;
            this.goodTank.moveRight();
        }
    }
};