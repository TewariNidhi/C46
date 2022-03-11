var gameState="start";
function preload(){
  bgImg=loadImage("greyImg.webp");

}

function setup(){
  createCanvas(400,600)
 start=createButton("Start");
 start.position(175,520);
 start.class("startButton");
 //start=createSprite(200,550,50,50);
 
 bg=createSprite(200,300);
 bg.visible=false;

 
 
}

function draw(){
  background("white")
  start.mouseClicked(gamePlay);
  // if(mousePressedOver(start)){
  //   gamePlay();
  // }

 
if(gameState==="play"){
  //start.visible=false;
  bg.visible=true;
  bg.addImage(bgImg);
  blur.scale=0.5
  bg.velocityY=2;
 
  if(bg.y>500){
    console.log("resetting");
   bg.y=bg.height/2;
  }
}
else{

}

drawSprites();
}
function gamePlay(){
  start.hide();
  
  gameState="play";
}
