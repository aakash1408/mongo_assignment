const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// Initialize express app and load environment variables
const app = express();

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Helper function to read products from the mock database (JSON file)
const readProducts = () => {
  const data = fs.readFileSync('product.json', 'utf-8');
  return JSON.parse(data);
};

// Middleware to check if a product exists by ID
const checkProductExists = (req, res, next) => {
  const productId = parseInt(req.params.id, 10);
  const products = readProducts();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  req.product = product; // Attach the product to the request for use in the route
  next();
};

// Route to get all products
app.get('/products', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// Route to get a single product by ID
app.get('/products/:id', checkProductExists, (req, res) => {
  res.json(req.product); // Respond with the product found in the middleware
});

// Route to add a new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  const products = readProducts();
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  // Write updated products back to products.json
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));

  res.status(201).json(newProduct); // Return the newly created product
});

// Route to update a product by ID
app.put('/products/:id', checkProductExists, (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  // Update the product
  req.product.name = name;
  req.product.price = price;

  const products = readProducts();
  const updatedProducts = products.map(p =>
    p.id === req.product.id ? req.product : p
  );

  // Write the updated list back to the file
  fs.writeFileSync('products.json', JSON.stringify(updatedProducts, null, 2));

  res.json(req.product); // Respond with the updated product
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong! Please try again later.' });
});

// Start the server
app.listen(3001, () => {
  console.log(`Server is running on port ${PORT}`);
});
