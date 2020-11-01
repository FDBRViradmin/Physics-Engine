const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

var ground_options = {
  isStatic : true
}

  ground = Bodies.rectangle(200,390,400,50,ground_options);
  World.add(world,ground);

var ball1_options = {
  restitution : 0.5
}

  ball1 = Bodies.circle(100,100,10,ball1_options);
  World.add(world,ball1);

  // ball1.shapeColor="red";
  console.log(ground);
  console.log(ground.type);

var ball2_options = {
  restitution : 0.6
}
  
  ball2 = Bodies.circle(150,100,10,ball2_options);
  World.add(world,ball2);

  //ball2.fill="orange";
var ball3_options = {
  restitution : 0.8
}
  
  ball3 = Bodies.circle(200,100,10,ball3_options);
  World.add(world,ball3);

  //ball3.fill="yellow";
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball1.position.x,ball1.position.y,10,10);
  fill("red");
  ellipse(ball2.position.x,ball2.position.y,10,10);
  fill("orange");
  ellipse(ball3.position.x,ball3.position.y,10,10);

  drawSprites();
}