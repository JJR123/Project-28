const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;  
const Constraint=Matter.Constraint;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, dustbin, launcher; 
var rect1,rect2, rect3;

function preload()
{
	
} 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	packageBody = new Paper(50,698);
	packageBody.debug='true'
	ground= new Ground(400,700,800,20); 
	dustbin=new Dustbin(700,680,150,10);   
	
	var rect3=rect(772,620,10,150); 
	var rect1=rect(628, 620,10,150); 
	var rect2=rect(700,690,150,10); 

    launcher = new Launcher(packageBody.body, {x:200, y:100});


	Engine.run(engine);
  
} 



function draw() {
  rectMode(CENTER);
  background(110,110,110); 
  packageBody.display(); 
  
  ground.display();  
  dustbin.display(); 
  packageBody.display(); 
  launcher.display();     

  drawSprites();

}
function mouseDragged(){ 
	Matter.Body.setPosition(packageBody.body, {x:mouseX, y:mouseY})
	
	
	} 
	function mouseReleased(){ 
	launcher.fly(); 
	
	} 