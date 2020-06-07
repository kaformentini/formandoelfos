let xCarOne = 500;
let yCarOne = 45;
let speedCarOne = 3;

let xCarTwo = 500;
let yCarTwo = 95;
let speedCarTwo = 2;

let xCarTree = 500;
let yCarTree = 155;
let speedCarTree = 5;

function moveCar() {
  xCarOne -= speedCarOne;
  xCarTwo -= speedCarTwo;
  xCarTree -= speedCarTree;
  backToStart();
}

function backToStart() {
  if (xCarOne < -50) {
    xCarOne = 500;
  }
  if (xCarTwo < -50) {
    xCarTwo = 500;
  }
  if (xCarTree < -50) {
    xCarTree = 500;
  }
}

function loadCar(imageActor, xActor, yActor, widthActor, heightActor) {
  image(imageActor, xActor, yActor, widthActor, heightActor);
}
