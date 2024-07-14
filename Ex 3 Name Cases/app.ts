// Store the person's name in a variable
const personName: string = "Sam";

// Print the name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print the name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print the name in title case
console.log(
  `Titlecase: ${personName.charAt(0).toUpperCase()}${personName
    .slice(1)
    .toLowerCase()}`
);
