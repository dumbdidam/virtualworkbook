//ascii webcam effect is inspired from https://www.youtube.com/watch?v=55iwMYv8tGI&pp=ygUKcDVqcyBhc2NpaQ%3D%3D
const density = "Ñ@#W$9876543210?!abc;:+=-,._          ";

let video;
let asciiDiv;

function setup() {
  asciiDiv = createDiv();
  asciiDiv.style('position', 'absolute');
  asciiDiv.style('top', '50%');
  asciiDiv.style('left', '50%');
  asciiDiv.style('transform', 'translate(-50%, -50%)');
    noCanvas();
  video = createCapture(VIDEO);
  video.size(130, 60);
  
}

function draw() {
background(160,255,0)
    fill('lightgreen');
    video.loadPixels();  
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
   const pixelIndex = (i + j * video.width) * 4;
   const r = video.pixels[pixelIndex + 0];
   const g = video.pixels[pixelIndex + 1];
   const b = video.pixels[pixelIndex + 2];
   const avg = (r + g + b) / 3;
   const len = density.length;
   const charIndex = floor(map(avg, 0, 255, 0, len));
   const c = density.charAt(charIndex);
   if (c == " ") asciiImage += "&nbsp;";
    else asciiImage += c;
   }
  asciiImage += '<br/>';
  }
 asciiDiv.html(asciiImage);
}
