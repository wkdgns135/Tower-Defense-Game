import Phaser, { Game } from 'phaser';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }
    create() {
        // 화면을 까만 색으로 채웁니다.
        this.add.rectangle(0, 0, this.game.config.width, this.game.config.height, 0x000000).setOrigin(0);

        // 빨간 글씨로 GAME OVER 메시지를 표시합니다.
        this.add.text(this.game.config.width / 2, this.game.config.height / 2, "GAME OVER", {
            fontFamily: 'Arial',
            fontSize: '56px',
            color: '#ff0000'
        }).setOrigin(0.5);

        this.add.text(this.game.config.width / 2, this.game.config.height / 2 + 50, "press F5 to reset", {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#ffffff'
        }).setOrigin(0.5);
    }
}
