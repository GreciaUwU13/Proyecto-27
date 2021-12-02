
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var bob1, bob2, bob3, bob4, bob5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	roofObject = new techo(400,100,230,20);
	bobObject1 = new masa(320,450,40);

	bob1 = new masa(320,450,40);
	bob2 = new masa(360,450,40);
	bob3 = new masa(400,450,40);
	bob4 = new masa(440,450,40);
	bob5 = new masa(480,450,40);
	
	rope1=new cuerda(bob1.body,roofObject.body,-80, 0);
	rope2=new cuerda(bob2.body,roofObject.body,-40, 0);
	rope3=new cuerda(bob3.body,roofObject.body, 0, 0);
	rope4=new cuerda(bob4.body,roofObject.body,+40, 0);
	rope5=new cuerda(bob5.body,roofObject.body,+80, 0);
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");//230

  roofObject.display();
  bobObject1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,
		   {x:-50, y: -50});
	}
}





