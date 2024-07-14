"use strict";
// Using make_shirt function to have a default size of “large,Medium” and a default message of “I love TypeScript”
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Shirt size: ${size}`);
    console.log(`Message printed on the shirt: "${message}"`);
}
// Large and Medium sized shirts printed with default message
// Small sized shirt with a custom message printed on it
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "TypeScript is Awesome!"); // Small shirt with a custom message
