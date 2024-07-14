// An array of guests
const guests: string[] = ["Salman", "Taha", "Mustafa"];

// Guest unable to attend
const unableToAttend = "Salman";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Bilal";
guests[guests.indexOf(unableToAttend)] = newGuest;

// Print new invitations to guests for dinner
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
