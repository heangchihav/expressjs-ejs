import { Request, Response } from "express";


export const indexController = (req: Request, res: Response) => {
  res.render('index', {
    title: 'EJS App',
    message: 'Welcome to your EJS application!'
  });
};

export const aboutController = (req: Request, res: Response) => {
  res.render('about', {
    title: 'About Us',
    content: 'This is a simple Express.js application with EJS templating.'
  });
};

export const serviceController = (req: Request, res: Response) => {
  res.render('service', {
    title: 'Services',
    content: 'This is a simple Express.js application with EJS templating.'
  });
};

export const contactController = (req: Request, res: Response) => {
  res.render('contact', {
    title: 'Contact Us',
    content: 'This is a simple Express.js application with EJS templating.',
    email: 'contact@example.com',
    phone: '123-456-7890',
  });
};
