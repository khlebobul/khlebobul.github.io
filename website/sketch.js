let charset = '░▒▓█▓▒░';

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(50);
    noStroke();
    rectMode(CENTER);
    let spacing = 20;
    let noiseScale = map(mouseX, 0, width, 0.005, 0.02); // Можно варьировать масштаб шума для лучшей визуализации
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            let n = noise(x * noiseScale, y * noiseScale, frameCount * 0.01); // Изменяем частоту кадра для анимации
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
