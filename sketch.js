var car
var wall
var speed,weight
var damage=0.5

function setup() {
  createCanvas(1500,400);
  car =createSprite(50, 200, 70, 5);
  car .shapeColor = 'orange'
  wall =createSprite(1300,200,30,height/2)
  wall.shapeColor='green'
  car.velocityX=30
}

function draw() {
  background('black');  
  speed=random(55,90)
  weight=random(400,1500)
  
  
  if (wall.x-car.x<(car.width+wall.width)/1.8){
    wall.shapeColor='blue'
    car.velocityX=1.5
  }
  if (wall.x-car.x<(car.width+wall.width)/8){
    wall.shapeColor='red'
    car.velocityX=0
  }
  drawSprites() 
} 