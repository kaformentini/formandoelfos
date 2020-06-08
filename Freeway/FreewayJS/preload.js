let freewayImage;
let carOneImage;
let carTwoImage;
let carTreeImage;

let cowImage;

let hitCarSound;
let scoreSound;
let soundtrackSound;

function preload() {
  freewayImage = loadImage("Material/estrada.png");

  carOneImage = loadImage("Material/carro-1.png");
  carTwoImage = loadImage("Material/carro-2.png");
  carTreeImage = loadImage("Material/carro-3.png");
  carFourImage = loadImage("Material/carro-2.png");
  carFiveImage = loadImage("Material/carro-1.png");
  carSixImage = loadImage("Material/carro-3.png");
  carsImages = [carOneImage, carTwoImage, carTreeImage, carFourImage, carFiveImage, carSixImage];

  cowImage = loadImage("Material/ator-1.png");

  hitCarSound = loadSound("Material/sons/colidiu.mp3");
  scoreSound = loadSound("Material/sons/pontos.wav");
  soundtrackSound = loadSound("Material/sons/trilha.mp3");
}
