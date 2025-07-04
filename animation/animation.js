let original = [5, 3, 8, 1];
let arr = [...original]; // clone original
let range = [1, 4];
let i = 0;
let steps = [];

function setup() {
  createCanvas(700, 500);
  textSize(18);
  textAlign(LEFT, TOP);
  frameRate(0.5); // SUPER SLOW: one step every 2 seconds
  background(255);
}

function draw() {
  clear();
  background(255);

  fill(0);
  text("🎯 Original Array: [" + original.join(", ") + "]", 20, 20);
  text("✅ Range: [" + range[0] + ", " + range[1] + "]", 20, 50);
  text("🔢 Current Array: [" + arr.join(", ") + "]", 20, 80);

  // Show process
  if (i < arr.length) {
    let val = arr[i];
    let action = "";
    
    if (val < range[0] || val > range[1]) {
      action = `❌ Removed ${val} at index ${i}`;
      arr.splice(i, 1);
      i--; // Stay on the same index
    } else {
      action = `✔️ Kept ${val} at index ${i}`;
    }

    steps.push(`Step ${steps.length + 1}: ${action}`);
    i++;
  } else {
    noLoop(); // Done
    steps.push(`✅ Final Array: [${arr.join(", ")}]`);
  }

  // Show all steps
  fill(30);
  for (let j = 0; j < steps.length; j++) {
    text(steps[j], 20, 120 + j * 25);
  }
}
