# Personal website 

A simple personal website using p5.js to create an animated background of Perlin noise and ASCII characters.

### [Demo](https://khlebobul.github.io)
<img width="800" alt="image" src="https://github.com/khlebobul/khlebobul.github.io/assets/77191581/19bc845c-8e73-4139-96d9-8f19c55fdb5e">

### How to use?

1. Feel free to clone this repository via link or Download ZIP button
```
git clone https://github.com/khlebobul/khlebobul.github.io
```
2. Change the content
3. You can also play with colors, fonts and background
4. Give this project a star 

### Background p5.js

Background was made with p5.js ([Link](https://editor.p5js.org/khlebobul/sketches/E-tW8xNKb))

```js
let charset = '░▒▓█▓▒░';

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(50);
    noStroke();
    rectMode(CENTER);
    let spacing = 20;
    let noiseScale = map(mouseX, 0, width, 0.005, 0.02);
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            let n = noise(x * noiseScale, y * noiseScale, frameCount * 0.01);
            let letter;
            if (n > 0.6) {
                letter = "█";
            } else if (n > 0.5) {
                letter = "▓";
            } else if (n > 0.4) {
                letter = "▒";
            } else if (n > 0.3) {
                letter = "░";
            } else {
                letter = " ";
            }
            textSize(20);
            text(letter, x, y);
        }
    }
}

function mousePressed() {
    if (!isLooping()) {
        loop();
    } else {
        noLoop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
```
