import express from "express";
import {respAPIController, testController } from "../controllers/apiController.js";
import { getAllData } from "../services/apiService.js";
const dynRouter = express.Router()

export const registerDynamicRoutes = async () => {
    console.log("registerDynamicRoutes");
    try {
        const allData = await getAllData();
        dynRouter.stack = []
        allData.forEach(element => {
            console.log('/' + element.pathData);
            dynRouter.post('/' + element.pathData, respAPIController);
        });
    } catch (error) {
        console.log(error);
    }
};

export default dynRouter