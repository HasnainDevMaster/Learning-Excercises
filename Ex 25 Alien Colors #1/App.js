"use strict";
// Imagine an alien was just shot down in a game
// Lets create a variable for the alien's color
let alien_color = "green";
// Check if the alien's color is green
if (alien_color === "green") {
    console.log("You just earned 5 points."); // alien_color is 'green', so the message is printed.
}
alien_color = "blue";
// Check if the alien's color is green
if (alien_color === "green") {
    console.log("You just earned 10 points."); // alien_color is not 'green'.As a result, there is no output.
}
