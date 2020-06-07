function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(freewayImage);

  loadCar(carOneImage, xCarOne, yCarOne, 50, 30);
//   moveCar(speedCarOne);

  loadCar(carTwoImage, xCarTwo, yCarTwo, 50, 30);
//   moveCar();

  loadCar(carTreeImage, xCarTree, yCarTree, 50, 30);
  moveCar();

  moveActor();

  loadActors(cowImage, xCow, yCow, 30, 25);
}



// function loadCars(){
//     createCar(carOneImage, xCarsInitial, 6);
// }

// function createCar(carImage, xCar, speedCar) {
//   // console.log(yCar)
//   // yCar += 45;

//   loadActors(carImage, xCar, 45, 50, 30);
//   moveCars(xCar, speedCar);
// }


