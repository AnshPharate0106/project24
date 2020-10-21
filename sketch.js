
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledPaper,ground,dustbin

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 crumpledPaper = new Paper();
	 ground = new Ground();


	dustbinPart1 = new Dustbin(902,505,10,120);
    dustbinPart2 = new Dustbin(962,565,130,10);
    dustbinPart3 = new Dustbin(1024,505,10,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    ground.display();
    crumpledPaper.display();
    dustbinPart1.display();
    dustbinPart2.display();
	  dustbinPart3.display(); 
	

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:85,y:-85});
    }
}




