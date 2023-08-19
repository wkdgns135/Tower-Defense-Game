import enemy_level_1 from "../assets/images/enemy/enemy_level_1.png";
import enemy_level_2 from "../assets/images/enemy/enemy_level_2.png";
import enemy_level_3 from "../assets/images/enemy/enemy_level_3.png";
import enemy_level_4 from "../assets/images/enemy/enemy_level_4.png";
import enemy_level_5 from "../assets/images/enemy/enemy_level_5.png";
import enemy_level_6 from "../assets/images/enemy/enemy_level_6.png";
import enemy_level_7 from "../assets/images/enemy/enemy_level_7.png";
import enemy_level_8 from "../assets/images/enemy/enemy_level_8.png";
import enemy_level_9 from "../assets/images/enemy/enemy_level_9.png";
import enemy_level_10 from "../assets/images/enemy/enemy_level_10.png";
import enemy_level_11 from "../assets/images/enemy/enemy_level_11.png";
import enemy_level_12 from "../assets/images/enemy/enemy_level_12.png";
import enemy_level_13 from "../assets/images/enemy/enemy_level_13.png";
import enemy_level_14 from "../assets/images/enemy/enemy_level_14.png";
import enemy_level_15 from "../assets/images/enemy/enemy_level_15.png";
import enemy_level_16 from "../assets/images/enemy/enemy_level_16.png";
import enemy_level_17 from "../assets/images/enemy/enemy_level_17.png";
import enemy_level_18 from "../assets/images/enemy/enemy_level_18.png";
import enemy_level_19 from "../assets/images/enemy/enemy_level_19.png";
import enemy_level_20 from "../assets/images/enemy/enemy_level_20.png";
import enemy_level_21 from "../assets/images/enemy/enemy_level_21.png";
import enemy_level_22 from "../assets/images/enemy/enemy_level_22.png";
import enemy_level_23 from "../assets/images/enemy/enemy_level_23.png";
import enemy_level_24 from "../assets/images/enemy/enemy_level_24.png";
import enemy_level_25 from "../assets/images/enemy/enemy_level_25.png";
import enemy_level_26 from "../assets/images/enemy/enemy_level_26.png";
import enemy_level_27 from "../assets/images/enemy/enemy_level_27.png";
import enemy_level_28 from "../assets/images/enemy/enemy_level_28.png";
import enemy_level_29 from "../assets/images/enemy/enemy_level_29.png";
import enemy_level_30 from "../assets/images/enemy/enemy_level_30.png";
import enemy_level_31 from "../assets/images/enemy/enemy_level_31.png";
import enemy_level_32 from "../assets/images/enemy/enemy_level_32.png";
import enemy_level_33 from "../assets/images/enemy/enemy_level_33.png";
import enemy_level_34 from "../assets/images/enemy/enemy_level_34.png";
import enemy_level_35 from "../assets/images/enemy/enemy_level_35.png";
import enemy_level_36 from "../assets/images/enemy/enemy_level_36.png";
import enemy_level_37 from "../assets/images/enemy/enemy_level_37.png";
import enemy_level_38 from "../assets/images/enemy/enemy_level_38.png";
import enemy_level_39 from "../assets/images/enemy/enemy_level_39.png";
import enemy_level_40 from "../assets/images/enemy/enemy_level_40.png";

var enemiesHp = [100, 200, 300, 500, 700, 900, 1400, 1800, 2200, 100000,
    5000, 7500, 10000, 12500, 15000, 17500, 20000, 25000, 27500, 3000000, 
    30000 , 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 6500000,
    100000, 110000, 120000, 120000, 130000, 130000, 140000, 140000, 150000, 10000000 
   ];

export function enemy_init(scene){
    scene.load.image('enemy_level_1', enemy_level_1);
    scene.load.image('enemy_level_2', enemy_level_2);
    scene.load.image('enemy_level_3', enemy_level_3);
    scene.load.image('enemy_level_4', enemy_level_4);
    scene.load.image('enemy_level_5', enemy_level_5);
    scene.load.image('enemy_level_6', enemy_level_6);
    scene.load.image('enemy_level_7', enemy_level_7);
    scene.load.image('enemy_level_8', enemy_level_8);
    scene.load.image('enemy_level_9', enemy_level_9);
    scene.load.image('enemy_level_10', enemy_level_10);
    scene.load.image('enemy_level_11', enemy_level_11);
    scene.load.image('enemy_level_12', enemy_level_12);
    scene.load.image('enemy_level_13', enemy_level_13);
    scene.load.image('enemy_level_14', enemy_level_14);
    scene.load.image('enemy_level_15', enemy_level_15);
    scene.load.image('enemy_level_16', enemy_level_16);
    scene.load.image('enemy_level_17', enemy_level_17);
    scene.load.image('enemy_level_18', enemy_level_18);
    scene.load.image('enemy_level_19', enemy_level_19);
    scene.load.image('enemy_level_20', enemy_level_20);
    scene.load.image('enemy_level_21', enemy_level_21);
    scene.load.image('enemy_level_22', enemy_level_22);
    scene.load.image('enemy_level_23', enemy_level_23);
    scene.load.image('enemy_level_24', enemy_level_24);
    scene.load.image('enemy_level_25', enemy_level_25);
    scene.load.image('enemy_level_26', enemy_level_26);
    scene.load.image('enemy_level_27', enemy_level_27);
    scene.load.image('enemy_level_28', enemy_level_28);
    scene.load.image('enemy_level_29', enemy_level_29);
    scene.load.image('enemy_level_30', enemy_level_30);
    scene.load.image('enemy_level_31', enemy_level_31);
    scene.load.image('enemy_level_32', enemy_level_32);
    scene.load.image('enemy_level_33', enemy_level_33);
    scene.load.image('enemy_level_34', enemy_level_34);
    scene.load.image('enemy_level_35', enemy_level_35);
    scene.load.image('enemy_level_36', enemy_level_36);
    scene.load.image('enemy_level_37', enemy_level_37);
    scene.load.image('enemy_level_38', enemy_level_38);
    scene.load.image('enemy_level_39', enemy_level_39);
    scene.load.image('enemy_level_40', enemy_level_40);
}

export function enemy_create(scene, GameManager, round){ //scene, level, hp

    var startPos = 50;
    let _level = round;
    var size = round % 10 == 0 ? 95 : 75;
    var newEnemy = {
        level: _level,
        sprite: null,
        name: 'enemy_level_' + _level,
        hp: null,
        posX: startPos,
        posY: startPos,
        healthBar: null
    };

    newEnemy.hp = enemiesHp[round-1];

    var temp = scene.physics.add.group();
    newEnemy.sprite = temp.create(newEnemy.posX, newEnemy.posY, newEnemy.name);
    newEnemy.sprite.setDisplaySize(size, size);
    GameManager.enemies.push(newEnemy);
}

export function enemy_update(scene, GameManager){
    var speed = 5;
    for(let i = 0 ; i < GameManager.enemies.length; i++){
        const enemy = GameManager.enemies[i];
        const healthPercentage = enemy.hp / enemiesHp[enemy.level-1]; // 체력 비율 계산
        const healthBarWidth = 50; // 체력바 너비
        const healthBarHeight = 5; // 체력바 높이

        // 체력바 그래픽 생성 및 위치 설정
        if (!enemy.healthBar) {
            enemy.healthBar = scene.add.graphics();
        }

        enemy.healthBar.clear();
        enemy.healthBar.fillStyle(0xff0000);
        enemy.healthBar.fillRect(enemy.posX - healthBarWidth / 2, enemy.posY + 40, healthBarWidth, healthBarHeight);
        enemy.healthBar.fillStyle(0x00ff00);
        enemy.healthBar.fillRect(enemy.posX - healthBarWidth / 2, enemy.posY + 40, healthBarWidth * healthPercentage, healthBarHeight);

        if (enemy.posX >= 750) {
            enemy.posX = 750;
            enemy.posY += speed;
        }
        if (enemy.posY >= 550) {
            enemy.posY = 550;
            enemy.posX -= speed;
        }
        if (enemy.posX <= 50) {
            enemy.posX = 50;
            enemy.posY -= speed;
        }
        if (enemy.posY <= 50) {
            enemy.posY = 50;
            enemy.posX += speed;
        }

        enemy.sprite.setPosition(enemy.posX, enemy.posY);
    }
}


export function timer_update(scene, GameManager, Spawner){
    if(scene.time.now > Spawner.time){
        Spawner.time = scene.time.now + 500; // 0.5초 마다 한번 호출
        Spawner.timer += 500;
        if(Spawner.timer % 1000 == 0){ // 1초마다 텍스트 업데이트
            Spawner.timerText.innerText = Spawner.timer / 1000; 
            Spawner.currentRoundTimeText.innerText = 60 - (Spawner.timer / 1000 % 60);
            if(Spawner.timer / 1000 % 60 == 0){
                start_round(scene, GameManager, Spawner);
            }
        }
        // 시작시 지연시간
        if(Spawner.timer > 0){
            enemy_spawn(scene, GameManager, Spawner);
        }
    }
}

export function start_round(scene, GameManager, Spawner){
    Spawner.spawnEnemies = 0;
    Spawner.currentRound++;
    Spawner.currentRoundText.innerText = Spawner.currentRound;
    
    //10 라운드마다 보스라운드 진입
    if(Spawner.currentRound % 10 == 0){
        Spawner.spawnEnemies = 99;
        enemy_spawn(scene, GameManager, Spawner);
    }

    //보스 라운드 종료시 적이 살아있으면 게임 오버
    if(Spawner.currentRound % 10 == 1){
        if(GameManager.enemies.length != 0){
            scene.scene.start('GameOverScene');
        }else{
            //마지막 40라운드 종료시 적을 전부 잡으면 승리
            if(Spawner.currentRound == 41){
                scene.scene.start('GameWinScene');
            }
            if(GameManager.currentRound != 1){
                //보스 라운드 종료시 골드 지급
                GameManager.money += 150;
                scene.sound.add('increase_gold').play();
                GameManager.moneyText.innerText = GameManager.money;
        
                GameManager.bgm.stop();
                GameManager.bgm = scene.sound.add("round_bgm_" + (Math.ceil(Spawner.currentRound / 10) - 1),  { loop: true });
                GameManager.bgm.play();
            }
        }
    }
}

function enemy_spawn(scene, GameManager, Spawner){
    if (Spawner.spawnEnemies < Spawner.numEnemies) {
        enemy_create(scene, GameManager, Spawner.currentRound);
        Spawner.spawnEnemies++;

        // 적 150마리 초과시 게임오버
        if (GameManager.enemies.length > 150) {
            clearInterval(Spawner.timer);
            scene.scene.start("GameOverScene");
        }
    }
}