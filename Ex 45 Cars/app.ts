// Define the Car interface
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any additional properties
}

// Function to create a car object
function createCar(
  manufacturer: string,
  model: string,
  ...details: any[]
): Car {
  let car: Car = {
    manufacturer,
    model,
  };

  // Add any additional details to the car object
  details.forEach((detail) => {
    let [key, value] = detail;
    car[key] = value;
  });

  return car;
}

// Call the createCar function with required parameters and optional details
let carInfo = createCar(
  "Honda",
  "Accord",
  ["color", "Pearl White"],
  ["year", 2025],
  ["features", ["Sunroof", "Navigation"]]
);

// Print the car information
console.log(carInfo);
