import MainScene from "./scenes/MainScene";
import GameOverScene from "./scenes/GameOverScene";
import GameWinScene from "./scenes/GameWinScene";
// import MainScene from "./scenes/MainScene";
// import PlayingScene from "./scenes/PlayingScene";

const Config = {
    // 맵 크기
    width: 800,
    height: 700,
    backgroundColor: 0xFFFFFF,
    scene: [MainScene, GameOverScene, GameWinScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: process.env.DEBUG === "true",
        },
    },
    runUpdate: true
};

export default Config;
