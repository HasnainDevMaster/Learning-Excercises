// An array of guests
var guests = ["Salman", "Taha", "Mustafa", "Daniyal", "Zahid", "Adeel"];
// Inform people that only two guests can be invited
console.log("Apologies! I can now invite only two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print invitations for the remaining two guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// Clear the list by removing the last two names
guests.splice(0, guests.length);
console.log(guests);
