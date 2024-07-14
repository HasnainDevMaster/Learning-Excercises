"use strict";
// An array of current users
let current_users = ["Brian", "Julie", "Watson", "Maddie", "Elon"];
// An array of new users
let new_users = ["Brian", "Maddie", "Watson", "Gracie", "Stuart"];
// Check and validate availability of a username in new users
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
