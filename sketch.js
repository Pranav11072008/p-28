
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree
var ground
var mango


function preload()
{
 tree = loadImage("tree.png")
 boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =Bodies.rectangle(600,680,1200,20,{isStatic:true})
	World.add(world,ground)
	mango1 = new Mango(900,200,50)
	mango2 = new Mango(850,250,50)
	mango3 = new Mango(830,150,50)
	mango4 = new Mango(950,270,50)
	mango5 = new Mango(1100,250,50)
	mango6 = new Mango(1000,200,50)
	stone1 = new Stone(200,200,50)

	launcher = new Slingshot(stone1.body,{x:250,y:500})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
image(tree,700,100,500,600)
image(boy,200,450,300,300)

detectCollision(stone1,mango1)
detectCollision(stone1,mango2)
detectCollision(stone1,mango3)
detectCollision(stone1,mango4)
detectCollision(stone1,mango5)
detectCollision(stone1,mango6)

  rect(ground.position.x,ground.position.y,1200,20)
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
stone1.display();
mango6.display();
launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode===32){
       launcher.attach(stone1.body)
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}
