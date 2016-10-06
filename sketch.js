var x = 0; //all variables are var in p5
var speed = 3;
function setup() {
    createCanvas(600,400);
}

function draw() {
  background(0);
  text("X Position of my circle: " + x, 20, 30);
  stroke(255)
  strokeWeight(4);
  fill(255,0,0);
  ellipse(x, 200, 100,100)
  x = x + speed;
if(x>= width || x < 0) {
  println("OFF THE SCREEN")
  speed = speed * -1;
}
}