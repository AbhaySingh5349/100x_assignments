// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

/*
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  console.log('data: ', data);
  const output_data = data.replace(/\s+/g, ' ');
  fs.writeFile('output.txt', output_data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
});
