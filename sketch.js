var box
function setup() {
  createCanvas(400,400);
  box=createSprite(50,70,40,40)
}

function draw()
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+5

  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5

  }
drawSprites()
}




