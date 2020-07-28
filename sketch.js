const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a = 0
function setup() {
  createCanvas(800,1200);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(165,300,5,5);
  box2 = new Box(195,300,5,5);
  box3 = new Box(225,300,5,5);
  box4 = new Box(255,300,5,5);
  box5 = new Box(285,300,5,5);
  box6 = new Box(180,315,5,5);
  box7 = new Box(210,315,5,5);
  box8 = new Box(240,315,5,5);
  box9 = new Box(270,315,5,5);
  box10 = new Box(240,315,5,5);
  box11 = new Box(150,315,5,5);
  box12 = new Box(165,330,5,5);
  box13 = new Box(195,330,5,5);
  box14 = new Box(225,330,5,5);
  box15 = new Box(255,330,5,5);
  box16 = new Box(285,330,5,5);
  box17 = new Box(180,345,5,5);
  box18 = new Box(210,345,5,5);
  box19 = new Box(240,345,5,5);
  box20 = new Box(270,345,5,5);
  box21 = new Box(240,345,5,5);
  box22 = new Box(150,345,5,5);
  box23 = new Box(165,360,5,5);
  box24 = new Box(195,360,5,5);
  box25 = new Box(225,360,5,5);
  box26 = new Box(255,360,5,5);
  box27 = new Box(285,360,5,5);
  box28 = new Box(180,375,5,5);
  box29 = new Box(210,375,5,5);
  box30 = new Box(240,375,5,5);
  box31 = new Box(270,375,5,5);
  box32 = new Box(240,375,5,5);
  box33 = new Box(150,375,5,5);
  box34 = new Box(165,390,5,5);
  box35 = new Box(195,390,5,5);
  box36 = new Box(225,390,5,5);
  box37 = new Box(255,390,5,5);
  box38 = new Box(285,390,5,5);
  box39 = new Box(180,405,5,5);
  box40 = new Box(210,405,5,5);
  box41 = new Box(240,405,5,5);
  box42 = new Box(270,405,5,5);
  box43 = new Box(240,405,5,5);
  box44 = new Box(150,405,5,5);
  bottom = new Box(400,500,800,5);
  edge1 = new Box(125,475,5,50);
  edge2 = new Box(155,475,5,50);
  edge3 = new Box(185,475,5,50);
  edge4 = new Box(215,475,5,50);
  edge5 = new Box(245,475,5,50);
  edge6 = new Box(275,475,5,50);
  edge7 = new Box(305,475,5,50);
  wall1 = new Box(115,475,5,500);
  wall2 = new Box(315,475,5,500);
  ball1 =new Ball(random(195,255),250,6,6)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  box33.display()
  box33.display()
  box34.display()
  box35.display()
  box36.display()
  box37.display()
  box38.display()
  box39.display()
  box40.display()
  box41.display()
  box42.display()
  box43.display()
  box44.display()
  bottom.display()
  edge1.display()
  edge2.display()
  edge3.display()
  edge4.display()
  edge5.display()
  edge6.display()
  edge7.display()
  if(keyCode === DOWN_ARROW){
    if(a>0.5){
      if(a>1.5){
        if(a>2.5){
          if(a>3.5){
            ball5 =new Ball(random(195,255),250,6,6)
          }else{
            ball4 =new Ball(random(195,255),250,6,6)
          }
        }else{
          ball3 =new Ball(random(195,255),250,6,6)
        }
      }else{
        ball2 =new Ball(random(195,255),250,6,6)
      }
    }else{
      ball1 =new Ball(random(195,255),250,6,6)
    }
    keyCode = UP_ARROW
    a++
  }
  if(a>0){
    ball1.display()
  }
  if(a>1){
    ball2.display()
  }
  if(a>2){
    ball3.display()
  }
  if(a>3){
    ball4.display()
  }
  if(a>4){
    ball5.display()
  }
}