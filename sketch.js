const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter. Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 450);


	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(600,height,1200,30);
	tree1 = new Tree(900, 350, 400,400)
	stoneObj=new Stone(100,350,30); 
	boy = new Player(600,400, 200,200)
/*
	CHANGED THESE, BECAUSE NOW ONLY PASS 3 VALUES I.E. X-COORDINATE,
	Y-COORDINATE & RADIUS
	eVEN REDUCED IT FROM 50 BECAUSE THAT WAS TO BIG, YOU CAN CHANGE HOWEVER
	YOU LIKE
*/
	mango1 = new Mango(900, 100, 30)
	mango2 = new Mango(1020,150, 30)
	mango3 = new Mango(800, 70, 30)
	mango4 = new Mango(850, 150, 30)
	mango5 = new Mango(780, 150, 30)
	mango6 = new Mango(990, 100, 30)
	mango7 = new Mango(900, 50,  30)
	mango8 = new Mango(950, 170, 30)

	launcherObject =new launcher(stoneObj.body,{x:200,y:350})

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  
  
  drawSprites();

 ground1.display();
 tree1.display();
 stoneObj.display();
 boy.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();

 detectcollosion(stoneObj, mango1)
 detectcollosion(stoneObj, mango2)
 detectcollosion(stoneObj, mango3)
 detectcollosion(stoneObj, mango4)
 detectcollosion(stoneObj, mango5)
 detectcollosion(stoneObj, mango6)
 detectcollosion(stoneObj, mango7)
 detectcollosion(stoneObj, mango8)

 

 launcherObject.display();

strokeWeight(3);
textSize(32);
stroke(255,205, 227 );
fill(176,140,255);
text('Can you DO IT ?', 30, 30);

strokeWeight(1);
textSize(20);
stroke(255, 255, 255);
fill(184, 184, 184);
text('Press spaceBAR to get ANOTHER chance! ', 20, 100);


}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY})
}


function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:200, y:350}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

function detectcollosion(Lstone, Lmango){
mangoBodyPosition = Lmango.body.position
stoneBodyPosition = Lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if (distance <= Lmango.r + Lstone.r  ){

	Matter.Body.setStatic(Lmango.body,false);
}}
