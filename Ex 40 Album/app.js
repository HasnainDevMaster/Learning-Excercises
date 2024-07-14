"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example 1: Create an album without specifying the number of tracks
const album1 = make_album("Junaid Jamshed", "Us Raah Par");
console.log(album1);
// Example 2: Create an album with the number of tracks
const album2 = make_album("Ali Zafar", "Huqqa Pani", 10);
console.log(album2);
// Example 3: Create another album without specifying the number of tracks
const album3 = make_album("Atif Aslam", "Doorie");
console.log(album3);
