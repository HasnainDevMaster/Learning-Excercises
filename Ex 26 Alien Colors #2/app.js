"use strict";
// Version 1: Alien color is green, runs the if block
let alien_color = "green"; // Declare a variable alien_color and assign it a value of 'green'
if (alien_color === "green") {
    // Check if the alien's color is green,The player earns 5 points for shooting a green alien
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
else {
    // This block will not be executed in this scenario
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
// Version 2: Alien color is yellow, runs the else block
let alien_Color_fail = "yellow"; // Assigning an alien's color to 'yellow'
if (alien_Color_fail === "green") {
    // Check if the alien's color is green
    // This block will not be executed in this scenario
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
}
else {
    // The player earns 10 points for shooting a non-green alien
    console.log("Congratulations! You just earned 10 points for shooting the alien!");
}
