// Task 2: Weather data

// In your JavaScript file, copy and paste the following array:
var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

// 1. Print the highest temperature to the console.
let highest = highTemperatures[0];
for (let i = 1; i < highTemperatures.length; i++) {
  if (highTemperatures[i] > highest) {
    highest = highTemperatures[i];
  }
}
console.log(`Highest temperature: ${highest}`);

// 2. Print the lowest temperature to the console.
let lowest = lowTemperatures[0];
for (let i = 1; i < lowTemperatures.length; i++) {
  if (lowTemperatures[i] < lowest) {
    lowest = lowTemperatures[i];
  }
}
console.log(`Lowest temperature: ${lowest}`);

// 3. What is the average high temperature from the data set? + 4.
const getAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < highTemperatures.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

console.log(`Average high temperature: ${getAverage(highTemperatures)}`);

// 4. What is the average low temperature from the data set?
console.log(`Average low temperature: ${getAverage(lowTemperatures)}`); // Utilize the function defined in question 3

// 5. What is the median high temperature from the data set?
const getMedian = (arr) => {
  // Sort the array in ascending order
  let sortedArr = [...arr].sort((a, b) => a - b);
  let len = sortedArr.length;
  // Find the middle index without Math.floor
  let mid = (len / 2) | 0;

  if (len % 2 !== 0) {
    // If the length is odd, return the middle element
    return sortedArr[mid];
  } else {
    // If the length is even, return the average of the two middle elements
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
};

console.log(`Median high temperature: ${getMedian(highTemperatures)}`);

// 6. What is the median low temperature from the data set?
console.log(`Median low temperature: ${getMedian(lowTemperatures)}`); // Utilize the function defined in question 5
