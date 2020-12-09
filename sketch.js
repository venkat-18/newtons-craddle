
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(600,500,80);
  bob2 = new Bob(520,500,80);
  bob3 = new Bob(440,500,80)
bob4 = new Bob(360,500,80);
bob5 = new Bob(280,500,80);
roof1=new Roof(440,100,440,30);
rope1=new Rope(bob1.body,roof1.body,160,10);
rope2=new Rope(bob2.body,roof1.body,80,10);
rope3=new Rope(bob3.body,roof1.body,0,10);
rope4=new Rope(bob4.body,roof1.body,-80,10);
rope5=new Rope(bob5.body,roof1.body,-160,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
  }
}


