import express from "express";
import {respAPIController, testController } from "../controllers/apiController.js";
import dynRouter, { registerDynamicRoutes } from "./dynamicRouter.js";
//import { getAllData } from "../services/apiService.js";
const router = express.Router()

// const registerDynamicRoutes = async () => {
//     console.log("registerDynamicRoutes");
//     try {
//         const allData = await getAllData();
//         allData.forEach(element => {
//             console.log('/' + element.pathData);
//             router.post('/' + element.pathData, respAPIController);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// registerDynamicRoutes();
router.use('/', dynRouter)
registerDynamicRoutes();

router.post('/order', respAPIController);
router.get('/add', testController);

export default router