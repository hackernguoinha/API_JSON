import {checkAPIAndUpdate, addData } from "../services/apiService.js";

export const homeController = (req, res) => {
    res.render('home')
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
        return res.redirect('/view')
    } else {
        return res.json({
            status: 'err',
            message: "Thiếu trường"
        })
    }
    
};