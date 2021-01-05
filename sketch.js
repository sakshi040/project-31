const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

function setup() {
  createCanvas(500,650);
  engine = Engine.create();
    world = engine.world;

  ground=new Ground(240,640,480,10)

for (var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }


}

function draw() {
  background(0);  
  Engine.update(engine);

ground.display();


for(var j=0;j < particles.length; j++) {
particles[j].display();
}
for (var k=0;k<divisions.length;k++){
  divisions[k].display();
}

for (var i=0;i<plinkos.length;i++){
  plinkos[i].display();
}

if (frameCount%30===0){
  particles.push(new Partical(random(width/2-30,width/2+30),10,10))
}
}

