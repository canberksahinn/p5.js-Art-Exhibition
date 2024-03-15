let wordSize = 50; // Size of the word
let trippyWords = ["LOVE", "PEACE", "UNITY", "HARMONY", "DREAM", "IMAGINE", "INSPIRE", "BELIEVE", "SERENITY", "BLISS", "ETERNITY", "JOY", "FAITH", "MAGIC", "WONDER", "PARADISE", "ZEN", "TRUTH", "BREATHE"]; // List of trippy words

function setup() {
  createCanvas(600, 600);
  setGradient(0, 0, width, height, color(0), color(0, 0, 100)); // Apply gradient background from black to dark blue
  drawStars(); // Call the function to draw stars
  drawMoon(); // Call the function to draw a circle at the center
  drawTriangles(); // Call the function to draw lots of triangles into the middle
  drawRandomLines(); // Call the function to draw random thin lines resembling a nerve system
  drawMoon(); // Call the function to draw a circle at the center
  drawRectangles(); // Call the function to draw rectangles like Russian dolls into the middle
  glitchEffect(3); // Apply glitch effect
  drawTrippyWord(); // Call the function to draw one trippy word

}

// Function to draw gradient background
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

// draw stars
function drawStars() {
  fill(255); // White color for stars
  noStroke(); // No stroke for stars
  for (let i = 0; i < 200; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    ellipse(x, y, 2, 2); // Draw a small ellipse as a star
  }
}

// glitch effect
function glitchEffect(amount) {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    if (random() < amount / 100) { // Chance of glitch
      pixels[i] = random(255); // Red channel
      pixels[i + 1] = random(255); // Green channel
      pixels[i + 2] = random(255); // Blue channel
    }
  }
  updatePixels();
}

// the moon one the left corner
function drawMoon() {
  fill(random(255), random(255), random(255)); // Random fill color
  ellipse(width / 5, height / 5, 200, 200); // Draw a circle at the center of the canvas
}

// random lines
function drawRandomLines() {
  stroke(random(255), random(255), random(255), 150); // Random stroke color
  strokeWeight(1); // Set stroke weight to make the lines thin
  for (let i = 0; i < 500; i++) {
    let x1 = random(width); // Random x-coordinate for start point
    let y1 = random(height); // Random y-coordinate for start point
    let x2 = random(width); // Random x-coordinate for end point
    let y2 = random(height); // Random y-coordinate for end point
    line(x1, y1, x2, y2); // Draw a line from start point to end point
  }
}

// background splash
function drawTriangles() {
  fill(random(255), random(255), random(255), 150); // Random fill color
  noStroke(); // No stroke for triangles
  for (let i = 0; i < 100; i++) {
    let x1 = random(width); // Random x-coordinate for vertex 1
    let y1 = random(height); // Random y-coordinate for vertex 1
    let x2 = random(width); // Random x-coordinate for vertex 2
    let y2 = random(height); // Random y-coordinate for vertex 2
    let x3 = random(width); // Random x-coordinate for vertex 3
    let y3 = random(height); // Random y-coordinate for vertex 3
    triangle(x1, y1, x2, y2, x3, y3); // Draw a triangle with random vertices
  }
}

// background for words
function drawRectangles() {
  let rectWidth = width / 4;
  let rectHeight = height / 4;
  let rectCount = 5; // Number of rectangles
  let rectSpacing = 20; // Spacing between rectangles
  let rectColor = [0]; // Random fill color for rectangles

  noStroke(); // No stroke for rectangles
  for (let i = 0; i < rectCount; i++) {
    fill(rectColor);
    rect(width / 2 - (rectWidth / 2) - (i * rectSpacing), height / 2 - (rectHeight / 2) - (i * rectSpacing), rectWidth + (i * 2 * rectSpacing), rectHeight + (i * 2 * rectSpacing));
  }
}

function drawTrippyWord() {
  let word = trippyWords[int(random(trippyWords.length))]; // Random trippy word
  textSize(wordSize);
  fill(255); // Random fill color
  textAlign(CENTER, CENTER); // Align text to the center
  text(word, width / 2, height / 2); // Draw word at the center of the canvas
}
