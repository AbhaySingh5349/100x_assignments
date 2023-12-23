// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('data: ', data);
  fs.writeFile('output.txt', data + ' new data', 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
});

console.log('after write file'); // still gets executed 1st
