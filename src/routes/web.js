import express from "express";
import { homeController } from "../controllers/webController.js";
const router = express.Router()

router.get('/', homeController)
router.get('/test', homeController);

export default router