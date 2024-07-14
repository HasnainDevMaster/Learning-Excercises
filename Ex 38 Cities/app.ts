// Using Function: describe_city
function describe_city(city: string, country: string = "Unknown") {
  console.log(`${city} is in ${country}.`);
} // Unknown = default country

// Values for describe_city function for three different cities
describe_city("Istanbul", "Turkey");
describe_city("Berlin", "Germany");
describe_city("Baku"); // Using the default country value
