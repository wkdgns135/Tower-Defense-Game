import Phaser, { Game } from 'phaser';
import { enemy_init, enemy_update, start_round , timer_update} from '../js/enemy.js'; // enemy 모듈에서 필요한 함수들 임포트
import { tower_init, wait_tower_create,tower_update, bullet_update, tower_update_text } from '../js/tower.js'; // tower 모듈에서 필요한 함수들 임포트
import { draw_background, draw_create, draw_init } from '../js/draw.js'; // background 모듈에서 필요한 함수 임포트

var GameManager;
var Spawner;

var developCommand1 = false;
var developCommand2 = false;

function keyDown(scene, event){ // for test
    if(event.key == 'a')developCommand1 = true;
    if(event.key == 'n')developCommand2 = true;
    if(developCommand1 && developCommand2 && event.key == '`'){
        wait_tower_create(scene, GameManager, Phaser.Math.Between(0, 2)+1, "transcendent");
        console.log(GameManager);
        console.log(Spawner);
    }

    if(event.key == ' '){
        Spawner.time-=500;
    }
}


export default class MainScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
        // bootGame : 이 scene의 identifier
    }
    
    preload() {
        GameManager = {
            bullets:[],
            towers:[],
            towerTiles:[],
            waitTowers:[],
            waitTowerTiles:[],
            enemies:[],
            killCount:0,
            money:150,
            moneyText:document.getElementById('current-gold'),
            killCountText:document.getElementById('enemy-count'),
            bgm:null,
            towerLimit:16,
            towerWaitLimit:5,
            towerUpgrade:[0, 0, 0],
            towerStats:[]
        };

        Spawner = {
            time:0, // 5초 지연 시작
            timer:-5000,
            currentRound:0,
            currentRoundText:document.getElementById('current-round'),
            currentRoundTimeText:document.getElementById('current-round-time'),
            timerText:document.getElementById('elapsed-time'),
            numEnemies:100,
            spawnEnemies:0
        };
        
        GameManager.towerStats = {
            1: {
              normal: { damage: 75, rate: 40, range: 200 }, // 업그레이드 효율이 좋지 않기 때문에 기초 공격력 up
              rare: { damage: 115, rate: 40, range: 200 },
              epic: { damage: 175, rate: 20, range: 350 },
              legend: { damage: 265, rate: 10, range: 350 },
              myth: { damage: 325, rate: 3, range: 500 },
              transcendent: { damage: 435, rate: 2,range: 500}
            },
            2: {
              normal: { damage: 100, rate: 60, range: 200 }, 
              rare: { damage: 150, rate: 60, range: 200 }, // normal 1.5마리
              epic: { damage: 225, rate: 30, range: 350 }, // rare 3마리
              legend: { damage: 350, rate: 15, range: 350}, // epic 3마리
              myth: { damage: 450, rate: 5, range: 500}, //legend 4마리
              transcendent: { damage: 550, rate: 3, range: 500} // myth 2마리
            },
            3: {
              normal: { damage: 125, rate: 80 , range: 200}, //업그레이드 효율이 좋기 때문에 기초 공격력 down
              rare: { damage: 185, rate: 80, range: 200 },
              epic: { damage: 275, rate: 40 , range: 350},
              legend: { damage: 415, rate: 20 , range: 350},
              myth: { damage: 550, rate: 7, range: 500},
              transcendent: { damage: 820, rate: 5, range: 500 }
            }
        };

        this.input.keyboard.on('keydown', event => keyDown(this, event)); // Test
        draw_init(this);
        enemy_init(this);
        tower_init(this);
    }

    create() {
        draw_background(this, GameManager);
        draw_create(this, GameManager);
        tower_update_text(GameManager);
        GameManager.bgm = this.sound.add('round_bgm_0', { loop: true });
    }

    update(){
        enemy_update(this, GameManager);
        tower_update(this, GameManager);
        bullet_update(this, GameManager);
        timer_update(this, GameManager, Spawner);
    }
}