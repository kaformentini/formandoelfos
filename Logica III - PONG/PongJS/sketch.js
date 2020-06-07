let yBall = 200;
let xBall = 300;
let diameterBall = 20;
let radiusBall = diameterBall / 2;

let speedBall = 2;
let xBallSpeed = speedBall;
let yBallSpeed = speedBall;

let xRacket = 5;
let yRacket = 150;
let widthRacket = 8;
let heightRacket = 90;

let collide = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  ballPosition();
  verifyEdge();
  showRacket();
  movementPlayerOneRacket();
  //verifyCollide();
  collideLibary();
}

function showBall() {
  circle(xBall, yBall, diameterBall);
}

function verifyEdge() {
  if (xBall + radiusBall > width ||
    xBall - radiusBall < 0) {
    xBallSpeed *= -1;
  }

  if (yBall + radiusBall > height ||
    yBall - radiusBall < 0) {
    yBallSpeed *= -1;
  }
}

function ballPosition() {
  xBall += xBallSpeed;
  yBall += yBallSpeed;

}

function showRacket() {
  rect(xRacket, yRacket, widthRacket, heightRacket);
}

function movementPlayerOneRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 10;
  }
}

function verifyCollide(){
  if ((xBall - radiusBall) < (xRacket + widthRacket) && (yBall - radiusBall) < (yRacket + heightRacket) && (yBall + radiusBall) > (yRacket)){
  xBallSpeed *= -1;
  }
}

function collideLibary() {
  collide = collideRectCircle(xRacket, yRacket, widthRacket, heightRacket, xBall, yBall, diameterBall);
  if (collide) {
    xBallSpeed *= -1;
  }
}