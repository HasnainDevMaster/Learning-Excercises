// An array of guests
var guests = ["Salman", "Taha", "Mustafa"];
// Guest unable to attend
var unableToAttend = "Salman";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Bilal";
guests[guests.indexOf(unableToAttend)] = newGuest;
// Print new invitations to guests for dinner
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
