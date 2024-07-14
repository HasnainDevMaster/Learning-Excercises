"use strict";
let magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Call the function to modify the array magicians
make_great(magicians);
// Print the modified array using the function show_magicians
function show_Magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_Magicians(magicians);
