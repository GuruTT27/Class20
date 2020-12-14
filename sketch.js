
var movingRect , fixedRect; 
function setup()
 { createCanvas(800,400);
   fixedRect = createSprite(400, 200, 50, 100);
    fixedRect.shapeColor = "yellow"; 
    fixedRect.debug = true; 
    movingRect = createSprite(450, 200, 100, 50);
     movingRect.shapeColor = "blue";
      movingRect.debug = true; }

function draw() {
  background(255,255,255);  

movingRect.x  = mouseX;
movingRect.y  = mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  &&movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){

movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";

}

else {

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow"; 

}

  drawSprites();
}