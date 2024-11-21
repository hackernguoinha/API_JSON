import {checkAPIAndUpdate, addData, getAllData} from "../services/apiService.js";
import { registerDynamicRoutes } from "../routes/dynamicRouter.js";

export const homeController = async (req, res) => {
    const result = await getAllData();
    const data = {};
    result.forEach(element => {
        if(element.apiID == 1){
            data.pathData1 = element.pathData;
            data.resData1 = element.resData;
        } else if(element.apiID == 2){
            data.pathData2 = element.pathData;
            data.resData2 = element.resData;
        } else if(element.apiID == 3){
            data.pathData3 = element.pathData;
            data.resData3 = element.resData;
        } else if(element.apiID == 4){
            data.pathData4 = element.pathData;
            data.resData4 = element.resData;
        } else if(element.apiID == 5){
            data.pathData5 = element.pathData;
            data.resData5 = element.resData;
        }
    });
    console.log(data);
    
    res.render('home', data)
};

export const editAPIController = async (req, res) => {
    const {user, apiID, pathData, resData} = req.body; // tương đương req.body.email, req.body.password, req.body.name
    console.log("------------------request view---------------------")
    console.log("path: /view" + req.path)
    console.log("body: ")
    console.log(req.body)
    console.log("----------------end request view--------------------")
    if(user && apiID && pathData && resData){
        const b = "B";
        const result = await checkAPIAndUpdate(user, apiID, pathData, resData);
        if(result){
            console.log("Update success!");
        } else {
            const response = await addData(user, apiID, pathData, null, resData);
            console.log("Add new success!");
        }
        await registerDynamicRoutes();
        return res.redirect('/view')
    } else {
        return res.json({
            status: 'err',
            message: "Thiếu trường"
        })
    }
    
};