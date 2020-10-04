var towerImage,tower,spookySound;
var doorImage,door,doorsGroup;
var climberImage,climber,climbersGroup;
var ghost,ghostImage;
var invisibleBlockGroup,invisibleBlock;
var gameState="play";

function preload(){
towerImage=loadImage("tower.png");
climberImage=loadImage("climber.png");
doorImage=loadImage("door.png");
ghostImage=loadImage("ghost-jumping.png","ghost-standing.png");
spookySound=loadSound("spooky.wav");
}

function setup(){
createCanvas(550,550);
climbersGroup=new Group();
doorsGroup=new Group();

tower=createSprite(300,300);
tower.addImage(towerImage);
tower.velocityY=1;

ghost=createSprite(200,200,50,50);
ghost.addImage(ghostImage);
ghost.scale=0.3;

}

function draw(){
  background(0);
  
  if(gameState==="play"){}
  if(keyDown("left_arrow")){
  ghost.x=ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
  ghost.x=ghost.x+3;
}
  if(keyDown("space")){
  ghost.velocityY=-10;
}
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  spawnDoors();
  
  if(climbersGroup.isTouching(ghost)){
   ghost.velocityY=0;
  }
 
  if(tower.y > 400){
      tower.y = 300
    }
  if(climbersGroup.isTouching(ghost)){
gameState="end";
}
drawSprites();
}
if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

function spawnDoors(){
if(frameCount%300===0){
  door=createSprite(200,-50);
  climber=createSprite(200,10);
  
  
  door.x = Math.round(random(120,400));
    climber.x = door.x;
    
    
    door.addImage(doorImage);
    climber.addImage(climberImage);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    
    door.lifetime = 500;
    climber.lifetime = 500;
    
  
    doorsGroup.add(door);
    
    climbersGroup.add(climber);
    
}
}