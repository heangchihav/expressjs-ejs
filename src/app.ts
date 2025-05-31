import express, { Request, Response } from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import router from './api/v1/routes';

const app = express();
const port: number = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Set up EJS layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
