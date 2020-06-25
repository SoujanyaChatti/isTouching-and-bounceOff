var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 20, 50);
 fixedrect=createSprite(200,200,30,20);
 movingrect.shapeColor="blue";
 movingrect.velocityX=-15;
 fixedrect.shapeColor="blue";
 fixedrect.velocityX=13;
}

function draw() {
  background(0); 
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="yellow";
  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  bounceOff(movingrect,fixedrect);
   
 // movingrect.x=mouseX;
 // movingrect.y=mouseY; 

  drawSprites();
}
