

var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
}
function draw() {
  //background(255, 0.5);
  image(capture, mouseX, mouseY, mouseX, mouseY);
  //image(capture, mouseX, mouseY, 10, 800);
  //filter(THRESHOLD);

  //adapted with help from chatGPT
  var thresholdValue = 115; 
  capture.loadPixels();
  for (var i = 0; i < capture.pixels.length; i += 4) {
    var r = capture.pixels[i];
    var g = capture.pixels[i + 1];
    var b = capture.pixels[i + 2];
    var avg = (r + g + b) / 3;
    var outputColor = avg > thresholdValue ? 255 : 0;
    capture.pixels[i] = outputColor;
    capture.pixels[i + 1] = outputColor;
    capture.pixels[i + 2] = outputColor;
  }
  capture.updatePixels();
  //image(capture, 400, 0, 40, 300)
}