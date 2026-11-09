const density = "Ñ@#W$9876543210?!abc;:+=-,._          ";

const COLS = 240;          // more columns = more detail
const FONT_SIZE = 2;       // px, lower = finer
const CHAR_ASPECT = 0.55;  // monospace glyph width / height

let video;
let asciiDiv;

function setup() {
  noCanvas();
  document.body.style.margin = '0';
  document.body.style.background = 'rgb(160,255,0)';

  asciiDiv = createDiv();
  asciiDiv.style('position', 'absolute');
  asciiDiv.style('top', '50%');
  asciiDiv.style('left', '50%');
  asciiDiv.style('transform', 'translate(-50%, -50%)');
  asciiDiv.style('font-family', 'monospace');
  asciiDiv.style('font-size', FONT_SIZE + 'px');
  asciiDiv.style('line-height', FONT_SIZE + 'px');
  asciiDiv.style('letter-spacing', '0px');
  asciiDiv.style('white-space', 'pre');
  asciiDiv.style('color', 'lightgreen');

  video = createCapture(VIDEO, () => {
    // rows derived from the camera's real aspect ratio,
    // corrected for characters being taller than wide
    const aspect = video.height / video.width;
    const rows = floor(COLS * aspect * CHAR_ASPECT);
    video.size(COLS, rows);
  });
  video.size(COLS, floor(COLS * 0.75 * CHAR_ASPECT));
  video.hide();
}

function draw() {
  video.loadPixels();
  if (!video.pixels.length) return;

  let out = "";
  const len = density.length;
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const idx = (i + j * video.width) * 4;
      const avg = (video.pixels[idx] + video.pixels[idx + 1] + video.pixels[idx + 2]) / 3;
      out += density.charAt(floor(map(avg, 0, 255, 0, len)));
    }
    out += "\n";
  }
  asciiDiv.elt.textContent = out;
}
