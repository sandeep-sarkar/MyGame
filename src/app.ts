import "phaser";

type GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
        title: "TankGame",
        width: 800,
        height: 600,
        parent: "game",
        backgroundColor: "#18216D"
};

export class MyTankGame extends Phaser.Game{
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new MyTankGame(config);
}