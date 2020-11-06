var ball,img,paddle;
function preload() {
  ballImage = loadImage("ball.png")
  paddleImage = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
ball = createSprite(30,200,20,40)
ball.addImage(ballImage);
  ball.velocityX = 7;
  
  paddle = createSprite(340,200,20,40)
  paddle.addImage(paddleImage);
  
}

function draw() {
  background(205,153,0); 
  edges = createEdgeSprites()
  
 
  ball.bounceOff (edges[0])
  ball.bounceOff (edges[2])
  ball.bounceOff (edges[3])
  ball.bounceOff (paddle,randomVelocity)
  
  
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityY  = random(-3,5)
  
}

