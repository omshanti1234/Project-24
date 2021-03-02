const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	  world = engine.world;

	ground = new Ground(400,660,800,20);

	paper = new Paper(100,600,10);

  leftSide = new Dustbin(550,620,20,100);
  bottom = new Dustbin(610,630,100,20);
  rightSide = new Dustbin(670,620,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);
  
  ground.display();

  paper.display();
  
  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
}

function keyPresssed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
  }
}