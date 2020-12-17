const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, circ, ground,box1, box2, box3,box4,box5;
var log1,log2,log3,log4;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
  
  log1 = new log(450, 270, 200,PI/2);

   circ = new Box(370, 300, 40, 40);
   ground = new Ground;
   box1 = new Box(530, 290, 40, 40);
   box2 = new Box(370, 250, 40, 40);
   box3 = new Box(530, 250, 40, 40);
   box4 = new Box(450, 100, 40, 40);
   box5 = new Box(200, 200, 30, 30);
   log2 = new log(450, 150, 200, PI/2)

   

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
  box5.body.position.y = mouseY;  
  box5.body.position.x = mouseX;
  
  log1.display();

   circ.display();
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   log2.display();




}