// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('data: ', data);
});

console.log('after read file'); // still gets executed 1st

// const fs = require('fs').promises;

// async function readFileAsync() {
//   try {
//     const data = await fs.readFile('file.txt', 'utf8');
//     console.log('data:', data);
//   } catch (error) {
//     console.error('Error reading file:', error);
//   }
// }

// readFileAsync();
