// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t  Sam White\n";

// Print the name with the whitespace
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);

// Remove the leading and trailing spaces
const trimmedName: string = personNameWithWhitespace.trim();

// Print the name after stripping the white spaces
console.log(`Name without whitespace: "${trimmedName}"`);
