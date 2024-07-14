// An array of guests
var guests = ["Salman", "Taha", "Mustafa"];
// Print personalized invitations for each guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
