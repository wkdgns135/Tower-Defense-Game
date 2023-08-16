import Phaser, { Game } from 'phaser';

export default class GameWinScene extends Phaser.Scene {
    constructor() {
        super("GameWinScene");
    }
    create() {
        // 화면을 까만 색으로 채웁니다.
        this.add.rectangle(0, 0, this.game.config.width, this.game.config.height, 0x000000).setOrigin(0);

        this.add.text(this.game.config.width / 2, this.game.config.height / 2, "YOU WIN!", {
            fontFamily: 'Arial',
            fontSize: '56px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(this.game.config.width / 2, this.game.config.height / 2 + 50, "press F5 to reset", {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#ffffff'
        }).setOrigin(0.5);
    }
}
