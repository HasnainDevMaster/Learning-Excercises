// An array of guests
let guests: string[] = ["Salman", "Taha", "Mustafa"];

// Inform guests about the bigger dinner table
console.log("Good news! I have found a bigger dinner table.");

// Add a new guest to the beginning of the array
guests.unshift("Daniyal");

// Add a new guest to the middle of the array
guests.splice(guests.length / 2, 0, "Zahid");

// Use append() (push) to add one more guest to the final list
guests.push("Adeel");

// Print invitation messages for each person
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
