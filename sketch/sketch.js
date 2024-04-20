let colors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(randomColour());
  colors = [
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour()
  ];
  frameRate(10);
}

function draw() {
  background(random(colors));
  
//i simplified Ashlea's code that we did in class, using the for loops to make it more efficient
  for (let i = 0; i < 5; i++) {
  fill(randomColour());
  circle(random(width), random(height), 100);
  }

  for (let i = 0; i < 5; i++) {
  fill(randomColour());
  rect(random(width), random(height), 100, 100);
  }

  for (let i = 0; i < 5; i++) {
  fill(randomColour());
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  }
  
  stroke(0);
  //fill(0);
  textSize(150);
  textAlign(CENTER, CENTER);
  text("BRAQUE DIGITIZED", width/2, height/2);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function randomColour() {
  return color(random(255), random(255), random(255));
}
