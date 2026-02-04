import express from 'express';
import { getMenu, placeOrder, getOrder } from '../controllers/foodController.js';

const router = express.Router();

router.get('/menu', getMenu);
router.post('/orders', placeOrder);
router.get('/orders/:id', getOrder);

export default router;
