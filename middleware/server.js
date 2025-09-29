const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock database for users
let users = [
  { id: 1, 
    username: 'user1', 
    password: 'password123'
  } //$2a$10$u4fByaIg9Kk8tb4C9dklEOIxl1tU5bTIsKlYc9LgpxT4FXShUj4zq' }, // password: 'password123'
];

// Middleware to check if user is authenticated (logged in)
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get token from header, "Bearer <token>"
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
};

// Route to login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) return res.status(400).send('User not found');

  const isMatch = await users.find((p) => p.password === password )//bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  // Generate JWT token
  const accessToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ accessToken });
});

// Route to logout
app.post('/logout', (req, res) => {
  // Log out by invalidating the JWT token on the client side
  // Usually, you would just instruct the client to discard the token

  res.status(200).send('Logged out successfully');
});

// Protected route, only accessible if logged in
app.get('/protected', authenticateJWT, (req, res) => {
  res.send(`Hello ${req.user.username}, you have access to this protected route!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
