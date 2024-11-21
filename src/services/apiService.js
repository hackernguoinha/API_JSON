import { APIData } from "../models/apiDataModel.js"

export const addData = (user, apiID, pathData, reqData, resData) => {
    return new Promise(async(resolve, reject) => {
        try {
            console.log('user: '.user);
            const addData = await APIData.create({
                user, apiID, pathData, reqData, resData
            })
            resolve({
                status: 'succ',
                message: {
                    req: addData.reqData,
                    res: addData.resData
                }
            })
        } catch (error) {
            console.log(error)
            reject({
                status: 'err',
                message: error
            })
        }
    })
}

export const getAllData = () => {
    return new Promise(async(resolve, reject) => {
        try {
            console.log('getAllData');
            const apiData = await APIData.find({});
            resolve(apiData);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getAPI = (terminalId) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(terminalId){
                console.log('Đầy đủ thông tin')
                resolve({
                    errorCode: '0000',
                    message: "Thành công"
                })
            } else {
                resolve({
                    status: 'err',
                    message: "Thiếu trường"
                })
            }
        } catch (error) {
            console.log(error)
            reject({
                status: 'err',
                message: error
            })
        }
    })
}