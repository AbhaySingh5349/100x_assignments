/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filesDirectory = path.join(__dirname, 'files');

app.get('/files', (req, res) => {
  // Read files from the directory
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      console.error('err in reading directory: ', err);
      return res.status(500).send('Internal Server Error');
    }

    // Send the list of files
    res.status(200).json(files);
  });
});

app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDirectory, filename);

  // Read file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle file not found error
      if (err.code === 'ENOENT') {
        res.status(404).send('File not found');
      } else {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
      return;
    }

    // Send the file content
    res.status(200).send(data);
  });
});

// not found middleware (for non-existent routes)
app.use('*', (req, res) => {
  return res.status(404).send('Route not found');
});

// Set the port to listen on
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
