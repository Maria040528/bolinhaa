
let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("rgb(34,34,131)");
  x = x + random(-5,5)
  y = y + random(-5,5)
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;  
  distancia = dist(mouseX,mouseY,x,y);
  fill("rgb(132,132,201)")
  circle(mouseX, mouseY, distancia)
  //circle(x, y, 10);
 if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
