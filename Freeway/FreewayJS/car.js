let xCars = [500, 500, 500, 500, 500, 500];
let yCars = [45, 95, 150, 215, 265, 320];
let speedCars = [5, 3, 6, 2.5, 1.9, 4];
let widthCar = 50;
let heightCar = 30;

function moveCar() {
  for (let i = 0; i < xCars.length; i++) {
    xCars[i] -= speedCars[i];
  }
  backToStartCar();
}

function backToStartCar() {
  for (let i = 0; i < xCars.length; i++) {
    if (xCars[i] < -50) {
      xCars[i] = 500;
    }
  }
}

function loadCar(imageCar, xCar, yCar, widthCar, heightCar) {
  image(imageCar, xCar, yCar, widthCar, heightCar);
}

function loadAllCars() {
  for (let i = 0; i < xCars.length; i++) {
    loadCar(carsImages[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}
