import { Router } from "express";
import { aboutController, contactController, indexController, serviceController } from "../controller";

const router = Router();

// Routes
router.get('/', indexController);
  
router.get('/about', aboutController);
  
router.get('/service', serviceController);
  
router.get('/contact', contactController);
  

export default router;