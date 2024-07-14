// Store the person's name with whitespace characters
var personNameWithWhitespace = "\t  Sam White\n";
// Print the name with the whitespace
console.log("Name with whitespace: \"".concat(personNameWithWhitespace, "\""));
// Remove the leading and trailing spaces
var trimmedName = personNameWithWhitespace.trim();
// Print the name after stripping the white spaces
console.log("Name without whitespace: \"".concat(trimmedName, "\""));
