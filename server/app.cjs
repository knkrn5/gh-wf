const http = require('node:http');

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body "Hello, World!"
  res.end('Hello, heroku server \n');
});

// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});