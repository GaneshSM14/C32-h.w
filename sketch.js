var box1,box2,box3,box4,box5,box6,box7,box8,box9
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var Ground1;
var polygon;
var SlingShot1;
function preload (){
backgroundImg = loadImage("bg.png");
gettime();
}
function setup() {
  createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;
 box1=new box(330.235,30,40);
  box2=new box(360,235,30,40);
  box3=new box(390,235,30,40);
  box4=new box(420,235,30,30);
  box5=new box(450,235,30,40);
  box6=new box (360,195,30,40);
  box7=new box(390,195,30,40);
  box8=new box(420,195,30,40);
  box9=new box(390,155,30,40);
  Ground1=new Ground(600,400,1200,20);
  polygon=createSprite(50,50,20,20);
  SlingShot1=new SlingShot(polygon.body,{x:100,y:100});
}

function draw() {
  if(backgroundImg){

  background(backgroundImg); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  Ground1.display();
  SlingShot1.display();
  drawSprites();
}
}
async function gettime(){
  var response = await  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejason = await response.json();
  var datetime = responsejason.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06&&hour<=18){
      bg=("bg.png");
  }
  else(bg="bg2.jpg");
backgroundImg=loadImage(bg);    
}
