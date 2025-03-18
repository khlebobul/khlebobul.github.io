let charset = ' ░▒▓█';

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Courier');
    textAlign(CENTER, CENTER);
}

function draw() {
    background(30, 30, 30, 50); 
    let spacing = 20;
    let noiseScale = 0.02;
    let maxDist = dist(width, height, 0, 0);
    
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            let d = dist(width, height, x, y) / maxDist; 
            let n = noise(x * noiseScale, y * noiseScale, frameCount * 0.005) * (1 - d); 
            let index = floor(n * charset.length);
            let letter = charset[index] || ' ';
            
            fill(180, 180, 180, 15 * (1 - d));
            textSize(18);
            text(letter, x, y);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
