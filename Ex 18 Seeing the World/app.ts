// Define an array of places
let places: string[] = ["Paris", "New York", "Tokyo", "Sydney", "London"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order without modifying the original array
console.log("Alphabetical order:", [...places].sort());

// Show that the original array is still in its original order
console.log("Original order:", places);

// Print the array in reverse alphabetical order without changing the original array
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Show that the original array is still in its original order
console.log("Original order:", places);

// Reverse the order of the list and print the array
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of the list again and print the array
places.reverse();
console.log("Original order restored:", places);

// Sort the array in alphabetical order and print the array
places.sort();
console.log("Alphabetical order:", places);

// Sort the array in reverse alphabetical order and print the array
places.sort().reverse();
console.log("Reverse alphabetical order:", places);
