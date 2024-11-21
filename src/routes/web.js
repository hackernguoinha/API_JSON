import express from "express";
import { homeController, editAPIController } from "../controllers/webController.js";
const router = express.Router()
// Middleware để xử lý dữ liệu POST từ form
router.use(express.urlencoded({ extended: true }));

router.get('/', homeController)
router.post('/edit-api1', editAPIController);

export default router