
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope4;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	//Create the Bodies Here.
	roof = new Roof(400,100,700,50);
	bob1 = new Bob(200,500,100,100);
	bob2 = new Bob(300,500,100,100);
	bob3 = new Bob(400,500,100,100);
	bob4 = new Bob(500,500,100,100);
	bob5 = new Bob(600,500,100,100);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyPressed(UP_ARROW)){
	  bob1.applyForce(20,30);
  }
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:17,y:-25})
	}
}

