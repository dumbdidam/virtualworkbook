//code adapted from class session
let drawing = false;
let lineColor;

function setup() {
createCanvas(windowWidth, windowHeight);

p=createP(" WELCOME TO DOODLE! CLICK 'S' TO SAVE AND 'R' TO RANDOMIZE THE LINE COLOR");
  p.position(80,0);
  p.style('font-family', 'Helvetica');
  p.style('font-weight', 'bold');
  p.style('font-size', '40px');


  

 let resetButton = createButton('RESET');
  resetButton.position(10, 10);
  resetButton.mousePressed(resetSketch);
  resetButton.style('font-weight', 'bold');

  lineColor = color(0);
}

function draw() {
    if (drawing) {
      stroke(lineColor);
      strokeWeight(5);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  
  function mousePressed() {
      drawing = true;r
  }
function mouseReleased() {
  drawing = false;
} 

function resetSketch() {
  background(255); 
}

function keyPressed(){
    if (key == 's'){
      saveCanvas('fileName', 'png');
    }
    if (key === 'r') {
        lineColor = color(random(255), random(255), random(255));
      }
}