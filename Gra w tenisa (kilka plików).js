const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;

function table() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);

    for (let linePosition = 20; linePosition < ch; linePosition += 30){
        ctx.fillStyle = "gray";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
    } 
}

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch /2 - ballSize / 2;

function ball() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
}

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

function player() {
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight); 
}

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;

function ball() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballY <= 0 || ballY + ballSize >= ch){
        ballSpeedY = -ballSpeedY;
        speedUp()
    }

    if(ballX <= 0 || ballX + ballSize >= cw){
        ballSpeedX = -ballSpeedX
        speedUp()
    }
}

topCanvas = canvas.offsetTop;
console.log(topCanvas)

function playerPosition(e) {
    playerY = e.clientY - topCanvas - paddelHeight / 2;
    if (playerY >= ch - paddelHeight){
        playerY = ch - paddelHeight
    }

    if (playerY <= 0){
        playerY = 0;
    }
    
}

function speedUp() {
    if (ballSpeedX > 0 && ballSpeedX <16){
        ballSpeedX += .2;
    } else if (ballSpeedX < 0 && ballSpeedX > -16){
        ballSpeedX -= .2;
    }
    
    if (ballSpeedY > 0 && ballSpeedY <16){
        ballSpeedY += .2;
    } else if (ballSpeedY < 0 && ballSpeedY > -16){
        ballSpeedY -= .2;
    }

    console.log(ballSpeedX + ", " + ballSpeedY)
}

canvas.addEventListener("mousemove", playerPosition)

function aiPosition() {
const middlePaddel = aiY + paddelHeight / 2;
const middleBall = ballY + ballSize / 2;

    if (ballX > 500) {
        if(middlePaddel - middleBall > 200) {
            aiY -= 24;
        } else if (middlePaddel - middleBall > 50) {
            aiY -= 10;
        } else if(middlePaddel - middleBall < -200) {
            aiY += 24;
        } else if (middlePaddel - middleBall < -50) {
            aiY += 10;
        }
    }
    if (ballX <= 500 && ballX > 100) {
        if(middlePaddel - middleBall > 100) {
            aiY -= 3;
        } 
        if(middlePaddel - middleBall < -100) {
            aiY += 3;
        }
    }
    if (aiY >- ch - paddelHeight) {
        aiY = ch - paddelHeight
    }

    if (aiY <= 0) {
        aiY = 0;
    }
}


function game() {
table();
ball();
player();
ai();
aiPosition();
}

setInterval (game, 1000/60)
