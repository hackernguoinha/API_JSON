import express from "express";
import { homeController, editAPIController, viewResponseController } from "../controllers/webController.js";
import { wss } from "../index.js";
const router = express.Router()
// Middleware để xử lý dữ liệu POST từ form
router.use(express.urlencoded({ extended: true }));

router.get('/', homeController)
router.post('/edit-api', editAPIController);
router.get('/request', viewResponseController);

export default router