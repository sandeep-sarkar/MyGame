import "phaser";
export class GameScene extends Phaser.Scene {
    delta: Number;
    lastStarTime: Number;
    starsCaught: Number;
    starsFallen: number;
    wall: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;

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
    }

    preload(): void{
        //this.load.setBaseURL
        this.load.image("wall", "assets/wall.png");
        this.load.image("tank", "assets/tank.png");
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
    }

    update(time): void{
        //TODO
    }

};