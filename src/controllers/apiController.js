import { addData, getAPI } from "../services/apiService.js";

export const studentController = (req, res) => {
    res.send('hihihihihihi')
};
export const testController = async (req, res) => {
    const response = await addData("A", 1, "abc/ef/ght/v2", {"test1":"abc","test2":"cde"}, {"test1":"abc","test2":"cde"})
    return res.json(response)
};
export const createOrderController = async (req, res) => {
    const {invoiceNo, terminalId} = req.body; // tương đương req.body.email, req.body.password, req.body.name
    console.log(req.body)
    if(terminalId){
        const response = await getAPI({terminalId})
        return res.json(response)
    } else {
        return res.json({
            status: 'err',
            message: "Thiếu trường"
        })
    }
    
};