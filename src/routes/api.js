import express from "express";
import { createOrderController } from "../controllers/apiController.js";
const router = express.Router()

router.post('/order', createOrderController);

export default router