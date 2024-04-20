//this piece of code is worked out through https://www.youtube.com/watch?v=a_6ggdvsIYE
var video;
var scaler = 10;
var preFrame; 
var threshold = 120;

function setup () {
    //createCanvas(640 , 480);
    createCanvas(1300 , 400);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/scaler, height/scaler);
    //video.hide();
    preFrame = createImage(video.width, video.height);

}

function draw() {
    background(255, 0 ,0 );
    video.loadPixels();
    preFrame.loadPixels();

    for(let y=0; y < video.height; y++) {
        for(let x=0; x < video.width; x++) {
            var index = (x + y * video.width) * 4
            let pr = preFrame.pixels[index + 0];
            let pg = preFrame.pixels[index + 1];
            let pb = preFrame.pixels[index + 2];
            let pbright = ( pr + pg + pb) / 3;

            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            let bright = (r + g + b) / 3;

            var diff = dist(r,g,b,pr,pg,pb);

            //if (diff<15){
            //    fill(bright);
            // } else {
            //    fill(255,0,0);
            //    }
            //noStroke();
            // ellipse(x * scaler, y * scaler, scaler, scaler);
            //}
             

            if (diff<threshold){
                //empty
            }else {
            fill(0);
            textSize(100);
            textAlign(CENTER,CENTER);
            text("MOTION DETECTED!", width/2, height/2);
            }

        }

    }
        preFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);

}


