var runner, runner_running;
var path;
var pathImage;

function preload()
{
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
}

function setup()
{
  createCanvas(400,400);
  //create sprites here

  //creating path
  path = createSprite(200,200,200,200);
  path.addImage("path moving", pathImage);
  path.velocityY=2;

  //creating jaxon
  runner = createSprite(200,320,20,100);
  runner.addAnimation("running", runner_running);
  runner.scale=0.07;

}

function draw() 
{

  if (path.y > 400) 
  { 
       path.y = 0;
  }

 // background("red");
  drawSprites();
}
