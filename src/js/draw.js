import { wait_tower_create} from '../js/tower.js';

import dicePng from "../assets/images/button/dice.png";
import binPng from "../assets/images/button/bin.png";
import upgradePng from "../assets/images/button/upgrade.png";
import fontXml from "../assets/font/font.xml";
import fontPng from "../assets/font/font.png";

//tile image
import grass_1 from "../assets/images/tile/grass_1.png";
import grass_2 from "../assets/images/tile/grass_2.png";
import grass_3 from "../assets/images/tile/grass_3.png";
import grass_4 from "../assets/images/tile/grass_4.png"

import normal_tile from "../assets/images/tile/normal_tile.png";
import rare_tile from "../assets/images/tile/rare_tile.png";
import epic_tile from "../assets/images/tile/epic_tile.png";
import legend_tile from "../assets/images/tile/legend_tile.png";
import myth_tile from "../assets/images/tile/myth_tile.png";
import transcendent_tile from "../assets/images/tile/transcendent_tile.png";
import icon_tile from "../assets/images/tile/icon_tile.png";

//sound effects
import increase_gold from "../assets/sounds/increase_gold.wav";
import sound_upgrade from "../assets/sounds/sound_upgrade.wav";
import sound_normal from "../assets/sounds/sound_normal.wav";
import sound_rare from "../assets/sounds/sound_rare.wav";
import sound_epic from "../assets/sounds/sound_epic.wav";
import sound_legend from "../assets/sounds/sound_legend.wav";
import sound_myth from "../assets/sounds/sound_myth.wav";
import sound_transcendent from "../assets/sounds/sound_transcendent.wav";
import fire_normal from "../assets/sounds/fire_normal.ogg";
import fire_rare from "../assets/sounds/fire_rare.ogg";
import fire_epic from "../assets/sounds/fire_epic.ogg";
import fire_legend from "../assets/sounds/fire_legend.ogg";
import fire_myth from "../assets/sounds/fire_myth.wav";
import fire_transcendent from "../assets/sounds/fire_transcendent.wav";
import sound_dead_1 from "../assets/sounds/sound_dead_1.wav";
import sound_dead_2 from "../assets/sounds/sound_dead_2.wav";
import sound_dead_3 from "../assets/sounds/sound_dead_3.wav";

import round_bgm_0 from "../assets/sounds/bgm/round_0.wav";
import round_bgm_1 from "../assets/sounds/bgm/round_1.mp3";
import round_bgm_2 from "../assets/sounds/bgm/round_2.mp3";
import round_bgm_3 from "../assets/sounds/bgm/round_3.ogg";



export function draw_init(scene) {
    document.getElementById("dice").src = dicePng;
    document.getElementById("bin").src = binPng;
    document.getElementById("upgrade").src = upgradePng;

    scene.load.image('dice', dicePng);
    scene.load.image('bin', binPng);
    scene.load.image('upgrade', upgradePng);
    scene.load.bitmapFont("pixelFont", fontPng, fontXml);

    scene.load.image('grass_1', grass_1);
    scene.load.image('grass_2', grass_2);
    scene.load.image('grass_3', grass_3);
    scene.load.image('grass_4', grass_4);

    scene.load.image('normal_tile', normal_tile);
    scene.load.image('rare_tile', rare_tile);
    scene.load.image('epic_tile', epic_tile);
    scene.load.image('legend_tile', legend_tile);
    scene.load.image('myth_tile', myth_tile);
    scene.load.image('transcendent_tile', transcendent_tile);
    scene.load.image('icon_tile', icon_tile);

    scene.load.audio('increase_gold', increase_gold);
    scene.load.audio('sound_upgrade', sound_upgrade);
    scene.load.audio('sound_normal', sound_normal);
    scene.load.audio('sound_rare', sound_rare);
    scene.load.audio('sound_epic', sound_epic);
    scene.load.audio('sound_legend', sound_legend);
    scene.load.audio('sound_myth', sound_myth);
    scene.load.audio('sound_transcendent', sound_transcendent);
    scene.load.audio('fire_normal', fire_normal);
    scene.load.audio('fire_rare', fire_rare);
    scene.load.audio('fire_epic', fire_epic);
    scene.load.audio('fire_legend', fire_legend);
    scene.load.audio('fire_myth', fire_myth);
    scene.load.audio('fire_transcendent', fire_transcendent);
    scene.load.audio('sound_dead_1', sound_dead_1);
    scene.load.audio('sound_dead_2', sound_dead_2);
    scene.load.audio('sound_dead_3', sound_dead_3);
    scene.load.audio('round_bgm_0', round_bgm_0);
    scene.load.audio('round_bgm_1', round_bgm_1);
    scene.load.audio('round_bgm_2', round_bgm_2);
    scene.load.audio('round_bgm_3', round_bgm_3);
    
}

export function draw_background(scene, GameManager){
    const grassTiles = ['grass_1', 'grass_2' ,'grass_3', 'grass_4'];
    const gridSize = 100; 
    const numRows = Math.ceil(scene.sys.game.config.height / gridSize);
    const numCols = Math.ceil(scene.sys.game.config.width / gridSize);

    //Draw north tile
    for (let row = 0; row < 1; row++) {
        for (let col = 0; col < numCols; col++) {
            const x = col * gridSize;
            const y = row * gridSize;
    
            const mask = [
                [25, 25],
                [25, 75],
                [75, 25],
                [75, 75]
            ];
    
            for (let i = 0; i < 4; i++) {
                const randomTileIndex = Phaser.Math.Between(0, grassTiles.length - 1);
                const randomTileKey = grassTiles[randomTileIndex];
                scene.add.image(x + mask[i][0], y + mask[i][1], randomTileKey).setDisplaySize(50, 50);
            }
        }
    }

    //Draw east tile
    for (let row = 0; row < numRows-1; row++) {
        for (let col = numCols-1; col < numCols; col++) {
            const x = col * gridSize;
            const y = row * gridSize;
    
            const mask = [
                [25, 25],
                [25, 75],
                [75, 25],
                [75, 75]
            ];
    
            for (let i = 0; i < 4; i++) {
                const randomTileIndex = Phaser.Math.Between(0, grassTiles.length - 1);
                const randomTileKey = grassTiles[randomTileIndex];
                scene.add.image(x + mask[i][0], y + mask[i][1], randomTileKey).setDisplaySize(50, 50);
            }
        }
    }

    //draw south tile
    for (let row = numRows-2; row < numRows-1; row++) {
        for (let col = 1; col < numCols; col++) {
            const x = col * gridSize;
            const y = row * gridSize;
    
            const mask = [
                [25, 25],
                [25, 75],
                [75, 25],
                [75, 75]
            ];
    
            for (let i = 0; i < 4; i++) {
                const randomTileIndex = Phaser.Math.Between(0, grassTiles.length - 1);
                const randomTileKey = grassTiles[randomTileIndex];
                scene.add.image(x + mask[i][0], y + mask[i][1], randomTileKey).setDisplaySize(50, 50);
            }
        }
    }

    //Draw west tile
    for (let row = 1; row < numRows-1; row++) {
        for (let col = 0; col < 1; col++) {
            const x = col * gridSize;
            const y = row * gridSize;
    
            const mask = [
                [25, 25],
                [25, 75],
                [75, 25],
                [75, 75]
            ];
    
            for (let i = 0; i < 4; i++) {
                const randomTileIndex = Phaser.Math.Between(0, grassTiles.length - 1);
                const randomTileKey = grassTiles[randomTileIndex];
                scene.add.image(x + mask[i][0], y + mask[i][1], randomTileKey).setDisplaySize(50, 50);
            }
        }
    }
    
    //draw wait towers tile
    for(let i = 50; i <= 450; i+=100){
        GameManager.waitTowerTiles.push(scene.add.image(i, 650, 'normal_tile').setDisplaySize(gridSize, gridSize));
    }
    
    //draw towrs tile;
    for (let row = 1; row < numRows-2; row++) {
        for (let col = 1; col < numCols-1; col++) {
            const x = col * gridSize;
            const y = row * gridSize;
            GameManager.towerTiles.push(scene.add.image(x+50, y+50, 'normal_tile').setDisplaySize(gridSize, gridSize));
        }
    }

}

export function update_background(GameManager){
    const towerTypes = ["normal", "rare", "epic", "legend", "myth", "transcendent"];
    for(const tile of GameManager.towerTiles)tile.setTexture('normal_tile');
    for(const tile of GameManager.waitTowerTiles)tile.setTexture('normal_tile');
    for(const tower of GameManager.towers)GameManager.towerTiles[tower.index].setTexture(tower.type+"_tile");
    for(const tower of GameManager.waitTowers)GameManager.waitTowerTiles[tower.index].setTexture(tower.type + "_tile");
    
}

export function draw_create(scene, GameManager){
    scene.add.image(550, 650, 'icon_tile').setDisplaySize(100, 100);
    scene.add.image(650, 650, 'icon_tile').setDisplaySize(100, 100);
    scene.add.image(750, 650, 'icon_tile').setDisplaySize(100, 100);

    var dice = scene.add.sprite(550, 650, 'dice');
    var bin = scene.add.sprite(650, 650, 'bin');
    var upgrade = scene.add.sprite(750, 650, 'upgrade');

    bin.setDisplaySize(75, 75);
    upgrade.setDisplaySize(75, 75);

    dice.setInteractive();
    dice.setDisplaySize(75, 75);
    dice.on('pointerup', () => dice_btn_on_click(scene, GameManager));
    
    GameManager.moneyText.innerText = GameManager.money;
    GameManager.killCountText.innerText = GameManager.killCount;
}
function get_random_value_with_probability(values, probabilities) {
    const totalProbability = probabilities.reduce((acc, probability) => acc + probability, 0);
    const random = Math.random() * totalProbability;

    let cumulativeProbability = 0;
    for (let i = 0; i < values.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random < cumulativeProbability) {
            return values[i];
        }
    }
}

function dice_btn_on_click(scene, GameManager){
    if(GameManager.money >= 50){
        GameManager.money -= 50;
        
        GameManager.moneyText.innerText = GameManager.money;
        const towerClass = [1, 2, 3];
        const towerClassProb = [0.34, 0.33, 0.33];
        const selectClass = get_random_value_with_probability(towerClass, towerClassProb);

        const towerType = ['normal', 'rare', 'epic', 'legend', 'myth', 'transcendent'];
        const towerTypeProb = [0.5, 0.3, 0.15, 0.045, 0.004, 0.001];

        const selectedType = get_random_value_with_probability(towerType, towerTypeProb);        
        wait_tower_create(scene, GameManager, selectClass, selectedType);
    }
}