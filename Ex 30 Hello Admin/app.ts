//  An array of usernames, including the name ‘admin’:
let usernames: string[] = ["admin", "Sam", "Zack", "John", "Ellie"];

// Loop through the array and print greetings for each user
for (const username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
