function setup() {
  let canvasDiv = document.getElementById('sketch-container');
  let canvas = createCanvas(600, 600);
  canvas.parent(canvasDiv);
  
  background(0, 0, 0);
  colorMode(HSB);
}

function draw() {
  stroke(frameCount %360, 25, 300);
  strokeWeight(mouseY/50);
  
  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;
  
  if (mouseIsPressed){
  line(x, y, px, py);
  line(width - x, y, width - px, py);
  line(x, height - y,  px, height -py);
  line(width - x, height - y, width - px, height -py);
  }
  
  
}
  

  