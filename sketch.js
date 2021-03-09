
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(200,200,150,40)
plane = new Plane(600,395,1200,10)
stone = new Stone(400,100,40,40)
rubber = new Rubber(500,150,50)
iron = new Iron(450,300,60,60)
sand1 = new Sand(150,100,10)
sand2 = new Sand(180,100,10)
sand3 = new Sand(200,100,10)
sand4 = new Sand(250,100,10)
sand5 = new Sand(300,100,10)
sand6 = new Sand(350,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  drawSprites();
 
}



