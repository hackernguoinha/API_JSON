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

export const getAPIByPath = (path) => {
    return new Promise(async(resolve, reject) => {
        try {
            const customePath = path.slice(1);
            console.log(customePath);
            const resp = await APIData.findOne({pathData: customePath});
            console.log(resp.resData);
            console.log('Resp data success!')
            resolve(resp.resData)
        } catch (error) {
            console.log(error)
            reject({
                status: 'err',
                message: error
            })
        }
    })
}

export const checkAPIAndUpdate = (user, apiID, pathData, resData) => {
    return new Promise(async(resolve, reject) => {
        try {
            const resp = await APIData.findOneAndUpdate(
                { user, apiID },  // Điều kiện tìm kiếm
                { $set: { pathData, resData} }, // Dữ liệu cần cập nhật
                { new: true } // Trả về tài liệu sau khi cập nhật
            );
            resolve(resp)
        } catch (error) {
            console.log(error)
            reject({
                status: 'err',
                message: error
            })
        }
    })
}

export const getAPIByUserAPIID = (user, apiID) => {
    return new Promise(async(resolve, reject) => {
        try {
            const resp = await APIData.findOne({ user, apiID });
            resolve(resp)
        } catch (error) {
            console.log(error)
            reject({
                status: 'err',
                message: error
            })
        }
    })
}