// Task 1: Today's weather

// In your JavaScript file, instantiate and assign the following variables with information about the current weather:

// temperature should hold a number representing the current temperature in Fahrenheit
const temperature = 82;

// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
const conditions = "windy";

// sunriseTime should hold a string representing what time the sun rose this morning
const sunriseTime = "6:15 AM";

// sunsetTime should hold a string representing what time the sun will set this evening
const sunsetTime = "6:30 PM";

// Log each variable to the console.
console.log(`Current temperature: ${temperature}`);
console.log(`Current weather conditions: ${conditions}`);
console.log(`Sunrise time: ${sunriseTime}`);
console.log(`Sunset time: ${sunsetTime}`);

// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")
const weatherSummary = `It's currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`;

console.log(weatherSummary);
