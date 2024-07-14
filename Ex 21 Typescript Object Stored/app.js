// An array of book objects
var books = [
    {
        title: "The Enigma of Nebula",
        author: "Astrid Novak",
        genre: "Science Fiction",
    },
    {
        title: "Whispers in the Mist",
        author: "Evelyn Harper",
        genre: "Mystery",
    },
    {
        title: "Chronicles of Eldoria",
        author: "Liam Stone",
        genre: "Fantasy",
    },
];
// Print the list of books
console.log("Fictional Books:");
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(book.genre));
}
