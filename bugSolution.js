const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); // Exit the process with an error code
  } else {
    console.error(`An error occurred:`, err);
    process.exit(1);
  }
});