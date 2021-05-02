var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(600,400,50,80);
 fixedRect.shapeColor="red"
 fixedRect.debug=true; 

 movingRect=createSprite(400,200,80,30);
 movingRect.shapeColor="red"
 movingRect.debug=true; 
}

function draw() {
  background("white"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ){
      movingRect.shapeColor="yellow";
      fixedRect.shapeColor="yellow"
    }
    else{
      fixedRect.shapeColor="red"
      movingRect.shapeColor="red"
    }
  drawSprites();
}