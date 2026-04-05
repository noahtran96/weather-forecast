// Task 3: Weather object

/*
In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:
temperature
conditions
*/
const currentWeather = {
  temperature: 82,
  conditions: "windy",
};

// Log the current temperature to the console.
console.log(`Current temperature: ${currentWeather.temperature}`);

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")
console.log(
  `It's ${currentWeather.temperature} degrees F and ${currentWeather.conditions}.`,
);
