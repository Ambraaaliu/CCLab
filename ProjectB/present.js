let img1, img2;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
// let easing = 0.05;
let repeatitions = 10;

let scrollSpeedX1;
let scrollSpeedY1;
let scrollSpeed1 = 7;

let scrollSpeedX2;
let scrollSpeedY2;
let scrollSpeed2 = 4;

// let img1Height, img2Height;
// let windowHeight;

function preload() {
  img1 = loadImage("FrontPre.png");
  img2 = loadImage("BackPre2.png");
  // img2 = loadImage('presentFrontImg2.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("wholeScreen");
  // img1Height = img1.height;
  // img2Height = img2.height;
  // windowHeight = window.innerHeight;
}

function draw() {
  background(255);


  scrollSpeedX2 = map(mouseX, 0, width, scrollSpeed2, -scrollSpeed2);
  scrollSpeedY2 = map(mouseY, 0, height, scrollSpeed2, -scrollSpeed2);
  x2 -= scrollSpeedX2;
  y2 -= scrollSpeedY2;
  if (x2 < -img2.width*(repeatitions-1)) {
    x2 = -img2.width*(repeatitions-1);
    scrollSpeedX2=0;
  }else if( x2 >0){
    x2 = 0;
    scrollSpeedX2=0;
  }
  
  if (y2 < -img2.height*(repeatitions-1)) {
    y2 = -img2.height*(repeatitions-1);
    scrollSpeedY2=0;
  }else if( y2 > 0){
    y2 = 0;
    scrollSpeedY2=0;
  }
  push();
  translate(x2, y2);
  for (let i = 0; i < repeatitions; i++) {
    for (let j = 0; j < repeatitions; j++) {
      let sx2 = img2.width;
      let sy2 = img2.height;
      // let sx = 250;
      // let sy = 250;
      image(img2, i * sx2, j * sy2, sx2, sy2);
    }
  }
  pop();
  scrollSpeedX1 = map(mouseX, 0, width, scrollSpeed1, -scrollSpeed1);
  scrollSpeedY1 = map(mouseY, 0, height, scrollSpeed1, -scrollSpeed1);
  x1 -= scrollSpeedX1;
  y1 -= scrollSpeedY1;
  if (x1 < -img1.width*(repeatitions-1)) {
    x1 = -img1.width*(repeatitions-1);
    scrollSpeedX1=0;
  }else if( x1 >0){
    x1 = 0;
    scrollSpeedX1=0;
  }
  
  if (y1 < -img1.height*(repeatitions-1)) {
    y1 = -img1.height*(repeatitions-1);
    scrollSpeedY1=0;
  }else if( y1 > 0){
    y1 = 0;
    scrollSpeedY1=0;
  }
  push();
  translate(x1, y1);
  for (let i = 0; i < repeatitions; i++) {
    for (let j = 0; j < repeatitions; j++) {
      let sx1 = img1.width;
      let sy1 = img1.height;
      // let sx = 150;
      // let sy = 150;
      image(img1, i * sx1, j * sy1, sx1, sy1);
    }
  }
  pop();


}

  