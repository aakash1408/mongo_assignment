const express = require('express');
const app = express();

// Middleware 1: Logging request info
const logRequestInfo = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request made to ${req.url}`);
  next();  // Call the next middleware function
};

// Middleware 2: Simple authentication check (for example purpose)
const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader === 'Bearer token123') {
    console.log("Authenticated!");
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

// Use the logging middleware globally
// This middleware is applied globally, so it will run for every request that hits the server.
app.use(logRequestInfo);

// Create a route that requires authentication
app.get('/secure-data', isAuthenticated, (req, res) => {
  res.json({ data: "This is secure data" });
});

// Create a route that doesn't require authentication
app.get('/public-data', (req, res) => {
  res.json({ data: "This is public data" });
});

// Start the server
app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`);
});


/*  
Middleware Functions:

1) logRequestInfo: This middleware logs information about every incoming request, like the
                   method (GET, POST, etc.) and the URL.
2) isAuthenticated: This middleware checks if the request has a valid authorization header
                   (Bearer token123). If the token is correct, it calls next() to continue
                   the request to the next middleware or route handler. 
                   the token is invalid, it responds with a 403 Forbidden status.
*/