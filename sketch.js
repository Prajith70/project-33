const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, background1;
var snow ;



function preload() {
  backgroundImg = loadImage ("snow2.jpg")
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  background1=createSprite(400, 200, 50, 50);
  background1.addImage(backgroundImg)
  
  

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  
 
  drawSprites();



}