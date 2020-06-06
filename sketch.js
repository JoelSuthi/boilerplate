var ground,paper,trash;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup(){
createCanvas(800,800);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ground = createSprite(400,760,800,10);
ground.shapeColor = "255";
paper = new Paper(50,700,50,50);
trash = new Trash(700,650,100,100);
}
function draw(){
rectMode(CENTER);	
background(0);
drawSprites();
paper.display();
trash.display();
keyPressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,this.paper.position,{x:85,y:-90});
	}
	}
