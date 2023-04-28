let mySound1;
let mySound2;
let mouseClicks = 0;
let isPlaying = false;

function preload() {
  mySound1 = loadSound("../Dreamland.mp3");
  mySound2 = loadSound("../Love.mp3");
}

function setup() {
    
    let canvas = createCanvas(400, 400);
    canvas.parent("song-container");
}

function draw() {
  background(255);

  // draw the play button
  
    fill(255, 240, 245);
    rect(100, 150, 100, 150);
    
    
    fill(135,206,250);
    rect(200, 150, 100, 150);
    
    fill(105,105,105);
    text("再点一次原方块停止播放", 100, 312);
    

    // check if the mouse is clicked inside the button area
    if (mouseIsPressed && mouseX > 100 && mouseX < 200 && mouseY > 150 && mouseY < 300) {
      mouseClicks++;
    

    // toggle the music on/off based on the number of clicks
    if (mouseClicks % 2 === 1 && !isPlaying) {
      mySound1.play();
      isPlaying = true;
    } else if (mouseClicks % 2 === 0 && isPlaying) {
      mySound1.stop();
      isPlaying = false;
    }
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 150 && mouseY < 300) {
      mouseClicks++;
    
    if (mouseClicks % 2 === 1 && !isPlaying) {
      mySound2.play();
      isPlaying = true;
    } else if (mouseClicks % 2 === 0 && isPlaying) {
      mySound2.stop();
      isPlaying = false;
    }
  }
}