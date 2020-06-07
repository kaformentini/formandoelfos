let xCow = 50;
let yCow = 370;

function loadActors(imageActor, xActor, yActor, widthActor, heightActor) {
  image(imageActor, xActor, yActor, widthActor, heightActor);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yCow -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yCow += 10;
  }
}
