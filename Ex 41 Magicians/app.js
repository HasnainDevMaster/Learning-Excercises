//  An array of magician names
let magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
];
// Using Function show_magicians to pass the array of magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Calling the function show_magicians to print the name of magicians
show_magicians(magicians);
export {};
