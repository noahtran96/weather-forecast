// Challenge 1

/*
Refactor your weather object to include today's high and low temperature and sunrise/ sunset times. Now your object should look something like this:

var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}
*/
const todaysWeather = {
  temperature: {
    high: 82,
    low: 34,
  },
  conditions: "windy",
  astronomy: {
    sunrise: "6:15 AM",
    sunset: "6:30 PM",
  },
};

// Log today's high temperature to the console.
console.log(`Today's high temperature: ${todaysWeather.temperature.high}`);

// Log today's low temperature to the console.
console.log(`Today's low temperature: ${todaysWeather.temperature.low}`);

// Log today's conditions to the console.
console.log(`Today's conditions: ${todaysWeather.conditions}`);

// Log today's sunrise time to the console.
console.log(`Today's sunrise time: ${todaysWeather.astronomy.sunrise}`);

// Use string template literals to create a more detailed description of today's weather.
console.log(
  `Today will be ${todaysWeather.conditions} with a high of ${todaysWeather.temperature.high}°F and a low of ${todaysWeather.temperature.low}°F. The sun rose at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`,
);
