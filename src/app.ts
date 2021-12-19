import "phaser";
import { Scene } from "phaser";
import {GameScene} from "./gameScene";

type GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
        title: "TankGame",
        width: 800,
        height: 600,
        parent: "game",
        scene: [GameScene],
        physics: {
            default: "arcade",
            arcade:{
                debug:false
            }
        },
        backgroundColor: "#000033"
};

export class MyTankGame extends Phaser.Game{
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new MyTankGame(config);
}