//Namespace, Nickname
const Engine= Matter.Engine;//embodies all laws of physics
const World= Matter.World;//the physical space that will run acc to your engine
const Bodies= Matter.Bodies;//the objects that inhabit the world

var engine,world;
var box;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
var option={
isStatic:true

}
  box=Bodies.rectangle(300,200,50,50,option);
  World.add(world,box);
  console.log(box);
  console.log(box.position.x);


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50)
  rect(box.position.x,box.position.y,50,50);
  drawSprites();
}