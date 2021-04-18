var bird;
var score = 0;

var gameState = 1;

var pipeG,pipe2G

function setup() {
  createCanvas(400,600);

  bird = createSprite(200,height/2,30,30);
  bird.shapeColor = "yellow"

  pipeG = new Group();
  pipe2G = new Group();
}

function draw() {
  background("skyblue");  

  pipes();
  pipes2();


  if(frameCount%35 === 0 && gameState === 1){
     score = score+1
  }

  if(gameState === 1){
  if(keyDown("UP_ARROW")){
     bird.y = bird.y - 2;
  } 

  if(keyDown("DOWN_ARROW")){
   bird.y = bird.y + 2;
 } 
}

  if(pipeG.isTouching(bird)){
    gameState = 0;
    
    pipeG.setVelocityXEach(0);
    pipe2G.setVelocityXEach(0);
    
    fill("red");
    textSize(30);
    text("GAME OVER",110,height/2);
  }

  if(pipe2G.isTouching(bird)){
   gameState = 0;
   
   pipeG.setVelocityXEach(0);
   pipe2G.setVelocityXEach(0);
   
   fill("red");
   textSize(30);
   text("GAME OVER",110,height/2);
 }

  fill("white");
  textSize(50);  

  drawSprites();

  text(score,180,70);
}

function pipes(){
   if(gameState === 1){
if(frameCount%65 === 0){
   var pipe = createSprite(430,520,50,random(250,400));
   pipe.shapeColor = "green"
   pipe.velocityX = -4; 
   pipeG.add(pipe);
 } 
}
}

function pipes2(){
   if(gameState === 1){
  if(frameCount%65 === 0){
     var pipe2 = createSprite(430,80,50,random(250,400));
     pipe2.shapeColor = "green"
     pipe2.velocityX = -4;
     pipe2G.add(pipe2);
  }
  }
}