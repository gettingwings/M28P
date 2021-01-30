//C28 Mango Plucking

var engine, world;
var tree, ground, boy;
var bgImage, treeImage, boyImage;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

var sling;

function preload(){
  bgImage = loadImage("sprites/bg.png");
  treeImage = loadImage("sprites/tree.png");
  boyImage = loadImage("sprites/boy.png");
}


function setup() {
  createCanvas(800,400);

  engine = Matter.Engine.create();
  world = engine.world;

  ground = Matter.Bodies.rectangle(400,400,800,10, {isStatic:"true", friction:1});
  Matter.World.add(world, ground);

  tree = Matter.Bodies.rectangle(640, 210, 10, 10, {isStatic:"true"});
  Matter.World.add(world, tree);

  stone = new Stone(80,302);

  mango1 = new Mango(600,200);
  mango2 = new Mango(620,170);
  mango3 = new Mango(610,80);
  mango4 = new Mango(650,110);
  mango5 = new Mango(575,149);
  mango6 = new Mango(720,140);
  mango7 = new Mango(560,185);
  mango8 = new Mango(746,190);
  mango9 = new Mango(675,140);
  mango10 = new Mango(520,170);
  mango11 = new Mango(746,100);

  sling = new SlingShot(stone.body, {x:80, y:302});
}


function draw() {
  background(bgImage); 

  imageMode(CENTER)
  //image(bgImage, 400, 200, 800, 400)
  
  Matter.Engine.update(engine);

  rectMode(CENTER)
  fill("green")
  rect(ground.position.x, ground.position.y, 800,5);
  image(treeImage, tree.position.x, tree.position.y, 350,410 );
  image(boyImage, 100, 345, 70, 200 );

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  fill(0);
  text(mouseX+"  ,  "+mouseY, mouseX, mouseY);

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:80, y:302})
    sling.attach(stone.body);
  }
}