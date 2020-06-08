let xCow = 50;
let yCow = 370;

let widthCow = 30;
let heightCow = 25;

let collide = false;

let score = 0;

function loadActors(imageActor, xActor, yActor, widthActor, heightActor) {
  image(imageActor, xActor, yActor, widthActor, heightActor);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yCow -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (verifyCowPositionY()) {
      yCow += 10;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xCow -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xCow += 10;
  }
}

function verifyCollide() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < xCars.length; i++) {
    collide = collideRectCircle(
      xCars[i],
      yCars[i],
      widthCar,
      heightCar,
      xCow,
      yCow,
      widthCow
    );
    if (collide) {
        hitCarSound.play();
      backToStartCow();
      if (score > 0) {
        score--;
      }
    }
  }
}

function backToStartCow() {
  yCow = 370;
}

function showScore() {
  textFont("monospace", 20);
  fill(179, 0, 0);
  text(score, width / 5, 25);
}

function addToScore() {
  if (yCow < 25) {
    score++;
    backToStartCow();
    scoreSound.play();
  }
}

function verifyCowPositionY(){
    return yCow < 366;
}
