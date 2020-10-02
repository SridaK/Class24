const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ourEngine,ourWorld;
var box1, box2, box3, box4, box5;
var ground;
var Pig1, Pig2;
var Log1, Log2, Log3, Log4;
var bird;
function setup() {
  createCanvas(1200,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  box1=new Box(700,320,70,70);
  box2=new Box(875,320,70,70)
  ground=new Ground(600, 390, 1200, 20);
  Pig1=new Pig(790,320)
  Log1=new Log(790,260,250,PI/2)//radian PI=180 degrees

  box3=new Box(700,235,70,70);
  box4=new Box(875,235,70,70)
  Pig2=new Pig(790,235)
  Log2=new Log(790,155,250,PI/2)//radian PI=180 degrees
 
  box5=new Box(790,130, 70,70)
  Log3=new Log(750,100,150,PI/4)
  Log4=new Log(810,100,150,-PI/4)

  bird=new Bird(100,300)

  console.log(box1);
}

function draw() {
  background("blue");  
 
  Engine.update(ourEngine);
  box1.display();
  box2.display();
  ground.display();
  Pig1.display();
  Log1.display();

  box3.display();
  box4.display();
  Pig2.display();
  Log2.display();

  box5.display();
  Log3.display();
  Log4.display();

  bird.display();
}
