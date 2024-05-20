// Declaration of global variables
var ranges;
let seed = Math.random() * 1247; // Generate a random seed
var mySize, margin, grad;
let str_wei = 0; // Initialize a variable for line thickness

// Define the color palette
let colors0 = "ffffff".split("-").map((a) => "#" + a); // White background color
let colorbg; // Variable for the background color

// Declaration of other global variables
let unit_x, unit_y;
let count;
let stop_count = 0;
let t = 0; // Variable for time
let mods = [];

// The setup() function is executed once when the sketch starts
function setup() {
    randomSeed(seed); // Set the random seed
    createCanvas(windowWidth, windowHeight); // Create a canvas that spans the entire window
    colorMode(RGB, 255); // Set the color mode to RGB with a range of 255
    colorbg = random(colors0); // Choose the background color (white)
    background(colorbg); // Set the background
    t = rez = c = n = 0.01; // Initialize temporal variables
    xOff = 0; // Initial x-axis offset
    yOff = 0; // Initial y-axis offset
}

// The draw() function is executed in a loop after setup() is executed
function draw() {
    randomSeed(seed); // Reset the random seed for repeatability
    background(colorbg); // Clear the background in each frame
    let plus = 10; // Grid step size

    // Double loop to iterate over all points in the grid
    for (let i = xOff; i < width - xOff; i += plus) {
        for (let j = yOff; j < height - yOff; j += plus) {
            strokeWeight(random(0.1)); // Set a random line thickness
            var n = noise(i * rez + t, j * rez + t); // Generate Perlin noise
            let gray = n * 255; // Calculate gray value based on noise
            push(); // Save the current transformation state
            translate(i, j); // Move to the current grid point
            ellipse(0, 0, plus * n, n * plus); // Draw an ellipse with sizes dependent on the noise value
            pop(); // Restore the transformation state
        }
    }

    t += 0.03; // Increment the time variable
    rez += 0.00001; // Increment the noise resolution
}
