const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world, engine;
var ground, ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }
  ground = Bodies.rectangle(400,350,800,40,options);
  World.add(world,ground);

  var ball_options = {
restitution:0.8
  }
  ball = Bodies.circle(200,120,60,ball_options);
  World.add(world,ball);


}

function draw() {
  background(255,255,255); 
  
  
  Engine.update(engine);
  rectMode(CENTER);
  fill("black");
  rect(ground.position.x, ground.position.y,800,40);

  ellipseMode(RADIUS);
  fill("pink");
  ellipse(ball.position.x, ball.position.y,60,60);

}