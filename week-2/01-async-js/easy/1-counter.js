// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;

function updateCounter() {
  counter++;
  console.log(`Counter: ${counter}`);
}

// Update the counter every second (1000 milliseconds)
const intervalId = setInterval(updateCounter, 1000);

// You can stop the counter after a certain duration (e.g., 10 seconds) if needed
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval
  console.log('Counter stopped after 10 seconds.');
}, 10000);
