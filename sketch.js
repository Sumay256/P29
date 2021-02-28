const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world;
var ground;
var p1,p2,p3,p4;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
    b21,b22,b23,b24,b25,b26,b27,b28;

var striker;
var sling;

function setup(){
    createCanvas(1000,700);
    engine = Engine.create();
	world = engine.world;
    striker= new BaseClass(500,400,60,60);
    sling= new rope(striker.body,{x:500,y:350});
    p1= new Ground(800,300,150,10);
    p2= new Ground(800,600,150,10);
    p3= new Ground(200,300,150,10);
    p4= new Ground(200,600,150,10);
   
    b1= new Box(750,250);
    b2= new Box(780,250);
    b3= new Box(810,250);
    b4= new Box(840,250);
    b5= new Box(780,200);
    b6= new Box(810,200);
    b7= new Box(798,150);

    b8= new Box(150,250);
    b9= new Box(180,250);
    b10= new Box(210,250);
    b11= new Box(240,250);
    b12= new Box(180,200);
    b13= new Box(210,200);
    b14= new Box(192,150);

    b15= new Box(150,550);
    b16= new Box(180,550);
    b17= new Box(210,550);
    b18= new Box(240,550);
    b19= new Box(180,500);
    b20= new Box(210,500);
    b21= new Box(192,450);

    b22= new Box(750,550);
    b23= new Box(780,550);
    b24= new Box(810,550);
    b25= new Box(840,550);
    b26= new Box(780,500);
    b27= new Box(810,500);
    b28= new Box(798,450);
    


  
    ground= new Ground(500,700,1000,20);



    Engine.run(engine);
}
function draw(){
    background(80);
    striker.display();
    sling.display();
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    
    b1.display("cyan");
    b2.display("cyan");
    b3.display("cyan");
    b4.display("cyan");
    b5.display("magenta");
    b6.display("magenta");
    b7.display("cyan");
    
    b8.display("cyan");
    b9.display("cyan");
    b10.display("cyan"); 
    b11.display("cyan");
    b12.display("magenta");
    b13.display("magenta");
    b14.display("cyan");


    b15.display("cyan");
    b16.display("cyan");
    b17.display("cyan");
    b18.display("cyan");
    b19.display("magenta");
    b20.display("magenta");
    b21.display("cyan");
   
    b22.display("cyan");
    b23.display("cyan");
    b24.display("cyan");
    b25.display("cyan");
    b26.display("magenta");
    b27.display("magenta");
    b28.display("cyan");
    ground.display();
    textSize(20)
    text("Drag and Release to hit the Blocks",350,50);
    text("Press Space to Re-attach",380,100);
}
function mouseDragged(){
	Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 sling.fly();
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(striker.body,{x:500,y:400});
		sling.attach(striker.body);
	}
}