let yBall = 200;
let xBall = 300;
let diameterBall = 25;
let radiusBall = diameterBall / 2;

let speedBall = 7;
let xBallSpeed = speedBall;
let yBallSpeed = speedBall;

let xPlayerOneRacket = 5;
let yPlayerOneRacket = 150;

let xPlayerTwoRacket = 587;
let yPlayerTwoRacket = 150;
let playerTowPositionY;

let widthRacket = 8;
let heightRacket = 90;

let playerOneScore = 0;
let playerTwoScore = 0;

let playerTwoIndexOfError = 20;

let collide = false;

let pointSound;
let hitSound;
let soundtrack;

function preload(){
  soundtrack = loadSound("PongSons/trilha.mp3");
  hitSound = loadSound("PongSons/raquetada.mp3");
  pointSound = loadSound("PongSons/ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  // soundtrack.loop();
}

function draw() {
  background(0);
  ballPosition();

  showBall();
  showRacket(xPlayerOneRacket, yPlayerOneRacket);
  showRacket(xPlayerTwoRacket, yPlayerTwoRacket);
  showScore();
  showMiddle();

  movementPlayerOneRacket();
  movementPlayerTwoRacket();
  verifyCollideEdges();

  //verifyCollideRacket(xPlayerOneRacket, yPlayerOneRacket);
  //verifyCollideRacket(xPlayerTwoRacket, yPlayerTwoRacket);
  collideRacketLibary(xPlayerOneRacket, yPlayerOneRacket);
  collideRacketLibary(xPlayerTwoRacket, yPlayerTwoRacket);

  setScore();
  
}

function showScore() {
  textFont("monospace", 50);
  
  fill(255);
  text(playerOneScore, 150, 50);
  text(playerTwoScore, 450, 50);
}

function showMiddle() {
  fill(169, 169, 169);
  let diviserY = 0;
  while(diviserY < 400){
    rect(300, diviserY, 5, 5);
    diviserY += 10;
  }
  
  // rect(300, 0, 5, 600)
}

function showBall() {
  fill(255)
  circle(xBall, yBall, diameterBall);
}

function showRacket(xRacket, yRacket) {
  fill(255)
  rect(xRacket, yRacket, widthRacket, heightRacket);
}

function ballPosition() {
  xBall += xBallSpeed;
  yBall += yBallSpeed;
}

function movementPlayerOneRacket() {
  if (keyIsDown(UP_ARROW)) {
    yPlayerOneRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPlayerOneRacket += 10;
  }
}

function movementPlayerTwoRacket() {
  playerTowPositionY = yBall - yPlayerTwoRacket - heightRacket / 2 - 30;
  yPlayerTwoRacket += playerTowPositionY + playerTwoIndexOfError;
  console.log(playerTwoIndexOfError)
  setErrorIndex();
  console.log(playerTwoIndexOfError)
}

function verifyCollideRacket(xRacket, yRacket) {
  if (
    xBall - radiusBall < xRacket + widthRacket &&
    yBall - radiusBall < yRacket + heightRacket &&
    yBall + radiusBall > yRacket
  ) {
    xBallSpeed *= -1;
    hitSound.play();
  }
}

function verifyCollideEdges() {
  if (xBall + radiusBall > width || xBall - radiusBall < 0) {
    xBallSpeed *= -1;
    
  }

  if (yBall + radiusBall > height || yBall - radiusBall < 0) {
    yBallSpeed *= -1;
    
  }
}

function collideRacketLibary(xRacket, yRacket) {
  collide = collideRectCircle(
    xRacket,
    yRacket,
    widthRacket,
    heightRacket,
    xBall,
    yBall,
    diameterBall
  );
  if (collide) {
    xBallSpeed *= -1;
    hitSound.play();
  }
}

function setScore() {
  if (xBall < 10) {
    playerTwoScore += 1;
    pointSound.play();
  }
  if (xBall > 590) {
    playerOneScore += 1;
    pointSound.play();
  }
}

function setErrorIndex(){
  if (playerTwoScore > playerOneScore) {
    playerTwoIndexOfError += 1;
    if (playerTwoIndexOfError >= 4) {
      playerTwoIndexOfError = 5;
    }
  } else {
    playerTwoIndexOfError -= 1
    if (playerTwoIndexOfError <= 2) {
      playerTwoIndexOfError = 2;
    }
  }
}
