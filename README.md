[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xr2RtvyI)

Lab 10, first three questions: The assignment was to create 20 balls using objects that move randomly in every direction and bounce off the walls of the canvas. The balls also have random colors. This was created using the colors array and this was called in the first loop with random(colors). Balls were easily duplicated to be any amount using the listOfBalls array. This array was then put into all the loops so the balls could be easily duplicated. Using these loops and arrays togther allows me to only have to change one number to change the amount of balls on the screen. The speed from the balls were created using newBall.x = newBall.x + newBall.speedX; and newBall.y = newBall.y + newBall.speedY;. 
Link: https://editor.p5js.org/hopecarroll/sketches/TGmH19snx

Lab 10, last question: This assignment was to create the same skecth but instead use a class instead of objects. I created the class called Ball which had a move and show function. The move function had the same loops from the previous draw function and the show function had the same drawSprite has the previous function. But the major difference in this code is in the draw function where instead of having two loops only two lines of code are created with calling the move and show using the listOfBalls array. 
Link: https://editor.p5js.org/hopecarroll/sketches/pt9h0wDVz
