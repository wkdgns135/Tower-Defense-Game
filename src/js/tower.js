import {update_background} from "../js/draw"

import tower_1_normal from "../assets/images/tower/tower_1_normal.png";
import tower_1_rare from "../assets/images/tower/tower_1_rare.png";
import tower_1_epic from "../assets/images/tower/tower_1_epic.png";
import tower_1_legend from "../assets/images/tower/tower_1_legend.png";
import tower_1_myth from "../assets/images/tower/tower_1_myth.png";
import tower_1_transcendent from "../assets/images/tower/tower_1_transcendent.png";

import tower_2_normal from "../assets/images/tower/tower_2_normal.png";
import tower_2_rare from "../assets/images/tower/tower_2_rare.png";
import tower_2_epic from "../assets/images/tower/tower_2_epic.png";
import tower_2_legend from "../assets/images/tower/tower_2_legend.png";
import tower_2_myth from "../assets/images/tower/tower_2_myth.png";
import tower_2_transcendent from "../assets/images/tower/tower_2_transcendent.png";

import tower_3_normal from "../assets/images/tower/tower_3_normal.png";
import tower_3_rare from "../assets/images/tower/tower_3_rare.png";
import tower_3_epic from "../assets/images/tower/tower_3_epic.png";
import tower_3_legend from "../assets/images/tower/tower_3_legend.png";
import tower_3_myth from "../assets/images/tower/tower_3_myth.png";
import tower_3_transcendent from "../assets/images/tower/tower_3_transcendent.png";

import bullet_1_normal from "../assets/images/effect/bullet_1_normal.png"
import bullet_1_rare from "../assets/images/effect/bullet_1_rare.png"
import bullet_1_epic from "../assets/images/effect/bullet_1_epic.png"
import bullet_1_legend from "../assets/images/effect/bullet_1_legend.png"
import bullet_1_myth from "../assets/images/effect/bullet_1_myth.png"
import bullet_1_transcendent from "../assets/images/effect/bullet_1_transcendent.png"

import bullet_2_normal from "../assets/images/effect/bullet_2_normal.png"
import bullet_2_rare from "../assets/images/effect/bullet_2_rare.png"
import bullet_2_epic from "../assets/images/effect/bullet_2_epic.png"
import bullet_2_legend from "../assets/images/effect/bullet_2_legend.png"
import bullet_2_myth from "../assets/images/effect/bullet_2_myth.png"
import bullet_2_transcendent from "../assets/images/effect/bullet_2_transcendent.png"

import bullet_3_normal from "../assets/images/effect/bullet_3_normal.png"
import bullet_3_rare from "../assets/images/effect/bullet_3_rare.png"
import bullet_3_epic from "../assets/images/effect/bullet_3_epic.png"
import bullet_3_legend from "../assets/images/effect/bullet_3_legend.png"
import bullet_3_myth from "../assets/images/effect/bullet_3_myth.png"
import bullet_3_transcendent from "../assets/images/effect/bullet_3_transcendent.png"

import dead_effect_1 from "../assets/images/effect/dead_effect_1.png";
import dead_effect_2 from "../assets/images/effect/dead_effect_2.png";
import dead_effect_3 from "../assets/images/effect/dead_effect_3.png";
import dead_effect_4 from "../assets/images/effect/dead_effect_4.png";


export function tower_init(scene){
    document.getElementById("tower_1_normal").src = tower_1_normal;
    document.getElementById("tower_1_rare").src = tower_1_rare;
    document.getElementById("tower_1_epic").src = tower_1_epic;
    document.getElementById("tower_1_legend").src = tower_1_legend;
    document.getElementById("tower_1_myth").src = tower_1_myth;
    document.getElementById("tower_1_transcendent").src = tower_1_transcendent;

    document.getElementById("tower_2_normal").src = tower_2_normal;
    document.getElementById("tower_2_rare").src = tower_2_rare;
    document.getElementById("tower_2_epic").src = tower_2_epic;
    document.getElementById("tower_2_legend").src = tower_2_legend;
    document.getElementById("tower_2_myth").src = tower_2_myth;
    document.getElementById("tower_2_transcendent").src = tower_2_transcendent;

    document.getElementById("tower_3_normal").src = tower_3_normal;
    document.getElementById("tower_3_rare").src = tower_3_rare;
    document.getElementById("tower_3_epic").src = tower_3_epic;
    document.getElementById("tower_3_legend").src = tower_3_legend;
    document.getElementById("tower_3_myth").src = tower_3_myth;
    document.getElementById("tower_3_transcendent").src = tower_3_transcendent;

    scene.load.image('tower_1_normal', tower_1_normal);
    scene.load.image('tower_1_rare', tower_1_rare);
    scene.load.image('tower_1_epic', tower_1_epic);
    scene.load.image('tower_1_legend', tower_1_legend);
    scene.load.image('tower_1_myth', tower_1_myth);
    scene.load.image('tower_1_transcendent', tower_1_transcendent);

    scene.load.image('tower_2_normal', tower_2_normal);
    scene.load.image('tower_2_rare', tower_2_rare);
    scene.load.image('tower_2_epic', tower_2_epic);
    scene.load.image('tower_2_legend', tower_2_legend);
    scene.load.image('tower_2_myth', tower_2_myth);
    scene.load.image('tower_2_transcendent', tower_2_transcendent);

    scene.load.image('tower_3_normal', tower_3_normal);
    scene.load.image('tower_3_rare', tower_3_rare);
    scene.load.image('tower_3_epic', tower_3_epic);
    scene.load.image('tower_3_legend', tower_3_legend);
    scene.load.image('tower_3_myth', tower_3_myth);
    scene.load.image('tower_3_transcendent', tower_3_transcendent);

    scene.load.image('bullet_1_normal', bullet_1_normal);
    scene.load.image('bullet_1_rare', bullet_1_rare);
    scene.load.image('bullet_1_epic', bullet_1_epic);
    scene.load.image('bullet_1_legend', bullet_1_legend);
    scene.load.image('bullet_1_myth', bullet_1_myth);
    scene.load.image('bullet_1_transcendent', bullet_1_transcendent);

    scene.load.image('bullet_2_normal', bullet_2_normal);
    scene.load.image('bullet_2_rare', bullet_2_rare);
    scene.load.image('bullet_2_epic', bullet_2_epic);
    scene.load.image('bullet_2_legend', bullet_2_legend);
    scene.load.image('bullet_2_myth', bullet_2_myth);
    scene.load.image('bullet_2_transcendent', bullet_2_transcendent);

    scene.load.image('bullet_3_normal', bullet_3_normal);
    scene.load.image('bullet_3_rare', bullet_3_rare);
    scene.load.image('bullet_3_epic', bullet_3_epic);
    scene.load.image('bullet_3_legend', bullet_3_legend);
    scene.load.image('bullet_3_myth', bullet_3_myth);
    scene.load.image('bullet_3_transcendent', bullet_3_transcendent);


    scene.load.image('dead_effect_1', dead_effect_1);
    scene.load.image('dead_effect_2', dead_effect_2);
    scene.load.image('dead_effect_3', dead_effect_3);
    scene.load.image('dead_effect_4', dead_effect_4);
}


export function tower_create(scene, GameManager, towerIndex, towerClass, towerType) {
    var newTower = {
        active: true,
        index: towerIndex,
        sprite: null,
        type: towerType,
        class: towerClass,
        posX: null,
        posY: null,
        lastFrame: 0,
        isDragging:false
    };
    
    newTower.posX = (towerIndex % 6 + 1) * 100 + 50;
    newTower.posY = (Math.floor(towerIndex / 6) + 1) * 100 + 50;
    GameManager.towers.push(newTower);
    update_background(GameManager);
    newTower.sprite = scene.add.image(newTower.posX, newTower.posY, get_tower_name(newTower.class, newTower.type));
    newTower.sprite.setDisplaySize(75, 75);
    newTower.sprite.setInteractive();

    newTower.sprite.on('pointerdown', tower_pointer_down(newTower));
    scene.input.on('pointermove', tower_pointer_move(newTower));
    scene.input.on('pointerup', tower_pointer_up(newTower, scene, GameManager));
}

export function wait_tower_create(scene, GameManager, towerClass, towerType){
    if(GameManager.waitTowers.length < GameManager.towerWaitLimit){
        var newTower = {
            index: null,
            sprite: null,
            type: towerType,
            class: towerClass,
            posX: null,
            posY: null,
            isDragging:false
        };
        
        for(let i = 0 ; i < GameManager.towerWaitLimit; i++){
            if(GameManager.waitTowers.findIndex(obj => obj.index === i) === -1){
                newTower.index = i;
                break;
            }
        }
        scene.sound.add("sound_"+towerType).play();
        newTower.posX = (newTower.index % 6) * 100 + 50;
        newTower.posY =  650;
        GameManager.waitTowers.push(newTower);
        update_background(GameManager);
        newTower.sprite = scene.add.image(newTower.posX, newTower.posY, get_tower_name(newTower.class, newTower.type));
        newTower.sprite.setDisplaySize(75, 75);
        newTower.sprite.setInteractive();
        newTower.sprite.on('pointerdown', wait_tower_pointer_down(newTower));
        scene.input.on('pointermove', wait_tower_pointer_move(newTower));
        scene.input.on('pointerup', wait_tower_pointer_up(newTower, scene, GameManager));
    }
}



export function tower_update(scene, GameManager){
    const currentFrame = scene.sys.game.loop.frame; // 현재 프레임
    for (let i = 0; i < GameManager.towers.length; i++) {
        const tower = GameManager.towers[i];
        const range = GameManager.towerStats[tower.class][tower.type].range;
        const rate = GameManager.towerStats[tower.class][tower.type].rate;
        if (currentFrame - tower.lastFrame >= rate && tower.active) { // 공격 주기마다 실행
            const targetEnemy = findClosestEnemyInRange(tower, GameManager.enemies, range); // 사거리 내 가장 가까운 적을 찾는 함수 호출
            if (targetEnemy) {
                bullet_create(scene, GameManager, targetEnemy, tower);
                tower.lastFrame = currentFrame;
            }
        }
    }
}

function bullet_create(scene, GameManager, towerTarget, tower){
    let bulletType = get_tower_name(tower.class, tower.type);
    bulletType = bulletType.replace('tower','bullet');

    let size = 50;
    if(bulletType.includes("epic"))size = 65;
    if(bulletType.includes("legend"))size = 80;
    if(bulletType.includes("myth"))size = 100;
    if(bulletType.includes("transcendent"))size = 125;

    var newBullet = {
        type:bulletType,
        sprite:null,
        target:towerTarget,
        damage:GameManager.towerStats[tower.class][tower.type].damage,
        posX:tower.posX,
        posY:tower.posY
    };

    var sound = scene.sound.add("fire_"+tower.type);
    if(tower.type == "epic" || tower.type == "legend")sound.setVolume(0.05);
    else sound.setVolume(0.1);
    sound.play();

    var bullet = scene.physics.add.group();
    newBullet.sprite = bullet.create(newBullet.posX, newBullet.poxY, newBullet.type);
    newBullet.sprite.setDisplaySize(size,size);

    scene.physics.add.collider(bullet, newBullet.target.sprite, (bullet, enemy) => bullet_hit_enemy(newBullet, enemy, scene, GameManager));
    
    GameManager.bullets.push(newBullet);
}

function findClosestEnemyInRange(tower, enemies, range) {
    let minDistance = range; // 초기값으로 사거리를 설정
    let closestEnemy = null;

    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        const distance = Phaser.Math.Distance.Between(tower.posX, tower.posY, enemy.posX, enemy.posY);

        if (distance <= range && distance < minDistance) {
            minDistance = distance;
            closestEnemy = enemy;
        }
    }

    return closestEnemy;
}

export function bullet_update(scene, GameManager){
    for(let i = 0; i < GameManager.bullets.length; i++){
        const bullet = GameManager.bullets[i];
        
        if (bullet.target.hp > 0) {
            const angle = Phaser.Math.Angle.Between(bullet.posX, bullet.posY, bullet.target.posX, bullet.target.posY);
            const velocityX = Math.cos(angle) * 10;
            const velocityY = Math.sin(angle) * 10;
            bullet.posX += velocityX;
            bullet.posY += velocityY;
            bullet.sprite.setPosition(bullet.posX, bullet.posY);
        }else{
            remove(GameManager.bullets, bullet);
        }
    }
}



function bullet_hit_enemy(bullet, enemy, scene, GameManager){
    //데미지 공식 타워 기본 공격 + 타워 기본공격 * 0.1 * 클래스 강화 횟수
    let damage = 0;

    if(bullet.type.includes('1')){
        damage = bullet.damage + (bullet.damage * GameManager.towerUpgrade[0] * 0.1);
    }
    if(bullet.type.includes('2')){
        damage = bullet.damage + (bullet.damage * GameManager.towerUpgrade[1] * 0.1);
    }
    if(bullet.type.includes('3')){
        damage = bullet.damage + (bullet.damage * GameManager.towerUpgrade[2] * 0.1);
    }
    bullet.target.hp -= damage;
    if(bullet.target.hp <= 0){ //적 제거
        //healthBar 객체 제거
        bullet.target.healthBar.destroy();
        kill_enemy(scene, GameManager)
        remove(GameManager.enemies, bullet.target);

        const dead_sounds = ['sound_dead_1', 'sound_dead_2', 'sound_dead_3'];
        const dead_effects = ['dead_effect_1', 'dead_effect_2', 'dead_effect_3', 'dead_effect_4'];

        const sound =  scene.sound.add(dead_sounds[Phaser.Math.Between(0, dead_sounds.length - 1)]);
        sound.setVolume(0.5);
        sound.play();

        const explosion = scene.add.sprite(bullet.target.posX, bullet.target.posY, dead_effects[Phaser.Math.Between(0, dead_effects.length - 1)]);
        explosion.setDisplaySize(75, 75);
        scene.time.delayedCall(500, () => {
            explosion.destroy(); // 폭발 효과 제거
        });
    }
    remove(GameManager.bullets, bullet);
}

function kill_enemy(scene, GameManager){
    GameManager.killCount++;
    if(GameManager.killCount % 25 == 0){
        GameManager.money += 50;
        scene.sound.add('increase_gold').play();
    }
    GameManager.moneyText.innerText = GameManager.money;
    GameManager.killCountText.innerText = GameManager.killCount;
}


function remove(array, target){
    const index = array.indexOf(target);
    target.sprite.destroy();
    if(index != -1){
        array.splice(index, 1);
    }
}

function tower_pointer_down(newTower) {
    return () => {
        newTower.isDragging = true;
        newTower.active = false;
    };
}

function tower_pointer_move(newTower) {
    return (pointer) => {
        if (newTower.isDragging) {
            newTower.sprite.setPosition(pointer.x, pointer.y);
        }
    };
}

function tower_pointer_up(newTower, scene, GameManager) {
    return (pointer) => {
        if (newTower.isDragging) {
            newTower.isDragging = false;
            newTower.active = true;
            if(pointer.x > 100 && pointer.y > 100 && pointer.x < 700 && pointer.y < 500){
                tower_place(scene, pointer, GameManager, newTower);
            }else if(pointer.x > 600 && pointer.y > 600 && pointer.x < 700 && pointer.y < 700){
                //쓰레기통에 커서가 위치할 때
                tower_bin(scene, GameManager, GameManager.towers, newTower);
            }else if(pointer.x > 700 && pointer.y > 600 && pointer.x < 800 && pointer.y < 700){
                //업그레이드에 커서가 위치할 때
                tower_upgade(scene, GameManager, GameManager.towers, newTower);
            }else{
                newTower.sprite.setPosition(newTower.posX, newTower.posY);
            }
            update_background(GameManager);
        }
    };
}

function wait_tower_pointer_down(newTower) {
    return () => {
        newTower.isDragging = true;
    };
}

function wait_tower_pointer_move(newTower) {
    return (pointer) => {
        if (newTower.isDragging) {
            newTower.sprite.setPosition(pointer.x, pointer.y);
        }
    };
}

function wait_tower_pointer_up(newTower, scene, GameManager) {
    return (pointer) => {
        if(newTower.isDragging){
            newTower.isDragging = false;
            if(pointer.x > 100 && pointer.y > 100 && pointer.x < 700 && pointer.y < 500){
                //격자 안에 올바르게 커서가 위치할 때
                wait_tower_place(scene, pointer, GameManager, newTower);
            }else if(pointer.x > 600 && pointer.y > 600 && pointer.x < 700 && pointer.y < 700){
                //쓰레기통에 커서가 위치할 때
                tower_bin(scene, GameManager, GameManager.waitTowers, newTower);
            }else if(pointer.x > 700 && pointer.y > 600 && pointer.x < 800 && pointer.y < 700){
                //업그레이드에 커서가 위치할 때
                tower_upgade(scene, GameManager, GameManager.waitTowers, newTower);
            }else{
                newTower.sprite.setPosition(newTower.posX, newTower.posY);
            }
            update_background(GameManager);
        }
    };
}

function tower_place(scene,pointer, GameManager, newTower){
    let x = Math.floor(pointer.x / 100)-1;
    let y = (Math.floor(pointer.y / 100)-1) * 6;
    let index = x + y;
    let target_index = GameManager.towers.findIndex(obj => obj.index === index);
    if(index != newTower.index){
        if(target_index === -1){
            tower_create(scene, GameManager, index, newTower.class, newTower.type);
            remove(GameManager.towers, newTower);
        }else{
            var target = GameManager.towers[target_index];
            tower_create(scene, GameManager, target.index, newTower.class, newTower.type);
            tower_create(scene, GameManager, newTower.index, target.class, target.type);
            remove(GameManager.towers, target);
            remove(GameManager.towers, newTower);
        }
    }else{
        newTower.sprite.setPosition(newTower.posX, newTower.posY);
    }
}

function wait_tower_place(scene,pointer, GameManager, newTower){
    let x = Math.floor(pointer.x / 100)-1;
    let y = (Math.floor(pointer.y / 100)-1) * 6;
    let index = x + y;

    //배치하려는 자리에 타워가 존재하지 않으면 배치
    if(GameManager.towers.findIndex(obj => obj.index === index) === -1){
        tower_create(scene, GameManager, index, newTower.class, newTower.type);
        remove(GameManager.waitTowers, newTower);
    }else{
        newTower.sprite.setPosition(newTower.posX, newTower.posY);
    }
}


function tower_bin(scene, GameManager, towers ,newTower){
    if(newTower.type.includes("normal")){
        GameManager.money += 10;
    }
    if(newTower.type.includes("rare")){
        GameManager.money += 25;
    }
    if(newTower.type.includes("epic")){
        GameManager.money += 50;
    }
    if(newTower.type.includes("legend")){
        GameManager.money += 100;
    }
    if(newTower.type.includes("myth")){
        GameManager.money += 300;
    }
    if(newTower.type.includes("transcendent")){
        GameManager.money += 1000;
    }
    scene.sound.add('increase_gold').play();
    GameManager.moneyText.innerText = GameManager.money;
    remove(towers, newTower);
}

function tower_upgade(scene, GameManager, towers, tower){
    const towerTypes = ["normal", "rare", "epic", "legend", "myth", "transcendent"];
    const upgradeValues = [1, 2, 3, 5, 10, 20];
    scene.sound.add('sound_upgrade').play();
    GameManager.towerUpgrade[tower.class -1] += upgradeValues[towerTypes.indexOf(tower.type)];
    remove(towers, tower);
    tower_update_text(GameManager)
}

export function tower_update_text(GameManager){
    const towerTypes = ["normal", "rare", "epic", "legend", "myth", "transcendent"];
    for(let towerClass = 1; towerClass <= 3; towerClass++){
        for(const towerType of towerTypes){
            let text =  document.getElementById("tower_" + towerClass + "_" + towerType + "_text");
            const damage = GameManager.towerStats[towerClass][towerType].damage;
            text.innerHTML = "공격력: " + (damage + (damage * 0.1 * GameManager.towerUpgrade[towerClass-1]));
        }
    }
}

function get_tower_name(towerClass, towerType){
    return "tower_"+towerClass+"_"+towerType;
}