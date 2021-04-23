const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState= "onSling"

function preload(){

polygon_img = loadImage("polygon.png")
}
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();	
	world = engine.world;
ground = new Ground(600,600,1200,10)
STAND = new Ground(400,540,270,10);

block1 = new Block(310,520,30,40,"red");
block2 = new Block(340,520,30,40,"red");
block3 = new Block(370,520,30,40,"red");
block4 = new Block(400,520,30,40,"red");
block5 = new Block(430,520,30,40,"red");
block6 = new Block(460,520,30,40,"red");
block7 = new Block(490,520,30,40,"red");

block8  = new Block2(340,480,30,40,"green");
block9 = new Block2(370,480,30,40,"green");
block10 = new Block2(400,480,30,40,"green");
block11 = new Block2(430,480,30,40,"green");
block12 = new Block2(460,480,30,40,"green")


block13 = new Block3(370,450,30,40,"blue");
block14 = new Block3(400,450,30,40,"blue");
block15 = new Block3(430,450,30,40,"blue");


block16 = new Block4(400,410,30,40,(10));


polygon = new Polygon(70,350,30);

slingshot = new Slingshot(polygon.body,{x:100,y:350})




//second block

ground2 = new Ground(800,280,350,10);

block17 = new Block3(680,250,30,40);
block18 = new Block3(710,250,30,40);
block19 = new Block3(740,250,30,40);
block20 = new Block3(770,250,30,40);
block21 = new Block3(800,250,30,40);
block22 = new Block3(830,250,30,40);
block23 = new Block3(860,250,30,40);
block24 = new Block3(890,250,30,40);
block25 = new Block3(920,250,30,40);


block26 = new Block4(710-20,210,30,40);
block27 = new Block4(740-20,210,30,40);
block28 = new Block4(770-20,210,30,40);
block29 = new Block4(800-20,210,30,40);
block30 = new Block4(830-20,210,30,40);
block31 = new Block4(860-20,210,30,40);
block32 = new Block4(890-20,210,30,40);

block33 = new Block2(740-10,170,30,40);
block34 = new Block2(770-10,170,30,40);
block35 = new Block2(800-10,170,30,40);
block36 = new Block2(830-10,170,30,40);
block37 = new Block2(860-10,170,30,40);

block38 = new Block(770-5,130,30,40);
block39 = new Block(800-5,130,30,40);
block40 = new Block(830-5,130,30,40);


block41 = new Block(800+3,90,30,40);
/*block42 = new Block(770+3,90,30,40);

block43= new Block (800-2,60,30,40);
*/
Engine.run(engine);
}
function draw(){
background(31,172,165);

ground.display();
STAND.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();

block33.display();
block34.display();
block35.display();
block36.display();
block37.display();

block38.display();
block39.display();
block40.display();
block41.display();

/*
block42.display();

block43.display();*/

ground2.display();

block21.display();
polygon.display();
slingshot.display();


drawSprites();

}
function mouseDragged(){
    if(gameState!=="launch"){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})}
}
function mouseReleased(){
	slingshot.fly();
    gameState= "launch";
	
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
