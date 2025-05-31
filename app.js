const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up EJS layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'EJS App',
    message: 'Welcome to your EJS application!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Us',
    content: 'This is a simple Express.js application with EJS templating.'
  });
});

app.get('/service', (req, res) => {
  res.render('service', { 
    title: 'Services',
    content: 'This is a simple Express.js application with EJS templating.'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Us',
    content: 'This is a simple Express.js application with EJS templating.',
    email: 'contact@example.com',
    phone: '123-456-7890',
    
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
