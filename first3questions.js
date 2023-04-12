let colors = ["blue", "purple", "orange", "red", "pink", "teal"]
let listOfBalls = [];
    
function setup() {
  createCanvas(400, 400);
   for (let i = 0; i < 20; i++){
     listOfBalls.push({
       x: random (width),
       y: random (height),
         speedX: random(1,5),
       speedY: random(1,5),
       color: random (colors),
     })
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < 20; i++) {
    let newBall = listOfBalls[i];
    drawSprite(newBall.x, newBall.y, newBall.color)
 newBall.x = newBall.x + newBall.speedX;
  if (newBall.x > width - 25 || newBall.x < 25) {
    newBall.speedX = newBall.speedX * -1;}
  newBall.y = newBall.y + newBall.speedY;
  if (newBall.y > width - 25 || newBall.y < 25) {
    newBall.speedY = newBall.speedY * -1;}
  }

 function drawSprite(x, y, color) {
  push();
   fill(color);
  ellipse(x, y, 50);
  pop(); }
}
