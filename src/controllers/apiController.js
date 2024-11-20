export const studentController = (req, res) => {
    res.send('hihihihihihi')
};
export const testController = (req, res) => {
    return res.json({
        status: 'err',
        message: "Thiếu trường email hoặc password"
    })
};
export const createOrderController = (req, res) => {
    const {invoiceNo, terminalId} = req.body; // tương đương req.body.email, req.body.password, req.body.name
    console.log(req.body)
    try {
        if(terminalId && terminalId){
            console.log('Đầy đủ thông tin')
            return res.json({
                errorCode: '0000',
                message: "Thành công"
            })
        } else {
            return res.json({
                status: 'err',
                message: "Thiếu trường"
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'err',
            message: "Lỗi xử lý"
        })
    }
};