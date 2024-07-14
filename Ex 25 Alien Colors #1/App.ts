// Imagine an alien was just shot down in a game.

// Version 1: Alien color is green (passes the if test)

// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color: string = "green";

// Write an if statement to test whether the alien’s color is green.
if (alien_color === "green") {
  // If it is, print a message that the player just earned 5 points.
  console.log(
    "Congratulations! You just earned 5 points for shooting down a green alien."
  );
}
// Version 2: Alien color is not green (fails the if test)

let alien_Color_fail: string = "yellow"; // Assigning the alien's color to 'yellow'

// Check if the alien's color is green
if (alien_Color_fail === "green") {
  // Print a message if the alien's color is green
  console.log(
    "Congratulations! You just earned 5 points for shooting down a green alien."
  );
}
