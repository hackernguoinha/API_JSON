import express from "express";
import { createOrderController, testController } from "../controllers/apiController.js";
const router = express.Router()

router.post('/order', createOrderController);
router.get('/add', testController);

export default router