// Counter without setInterval, try to code a counter in Javascript.

let counter = 0;
let maxDuration = 10; // in seconds

function updateCounter() {
  if (counter < maxDuration) {
    counter++;
    console.log(`Counter: ${counter}`);
    setTimeout(updateCounter, 1000);
  } else {
    console.log('Counter stopped after 10 seconds.');
  }
}

// Start the counter
updateCounter();
