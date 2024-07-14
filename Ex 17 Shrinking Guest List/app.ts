// An array of guests
let guests: string[] = [
  "Salman",
  "Taha",
  "Mustafa",
  "Daniyal",
  "Zahid",
  "Adeel",
];

// Inform people that only two guests can be invited
console.log("Apologies! I can now invite only two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitations for the remaining two guests
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Clear the list by removing the last two names
guests.splice(0, guests.length);
console.log(guests);
