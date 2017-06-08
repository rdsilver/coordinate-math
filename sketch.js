let formula = 'x + y'
const rectSize = 10;

function setup() {
  const myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('sketch');

  noStroke();
  smooth();
}

function draw() {
  if (!$("#formulaInput").is(":focus")) {
    for (let x=0; x<windowWidth; x+=rectSize) {
      for (let y=0; y<windowHeight; y+=rectSize) {
        getFill(x, y);
        rect(x, y, rectSize, rectSize);
      }
    }
  } else {
    // Don't iterate frameCount if we arn't actually drawing anything
    frameCount==;
  }
}

const rgb = [0, 0, 0]
function getFill(x, y) {
  for (let i=0; i<rgb.length; i++) {
    rgb[i] = (eval(formula) + frameCount/(i+1))%256;
  }
  fill (...rgb)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}