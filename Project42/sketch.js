var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //Calculating time using predefined func from p5.js
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);

  hrAngle = map(hr,0,%12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,100,5);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,5,100);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}