let freewayImage;
let carOneImage;
let cowImage;

function preload(){
  freewayImage = loadImage("Material/estrada.png");
  carOneImage = loadImage("Material/carro-1.png");
  cowImage = loadImage("Material/ator-1.png");
}

function setup(){
  createCanvas(500,400);
}

function draw(){
  background(freewayImage);
}