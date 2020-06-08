function setup() {
  createCanvas(500, 400);
  soundtrackSound.loop();
}

function draw() {
  background(freewayImage);

  loadAllCars();
  moveCar();

  
  loadActors(cowImage, xCow, yCow, widthCow, heightCow);
  moveActor();
  
  verifyCollide();

  showScore();
  addToScore();
}
