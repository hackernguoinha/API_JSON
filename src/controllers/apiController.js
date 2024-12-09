import { addData, getAPIByPath } from "../services/apiService.js";
import { wss } from "../index.js";
import { clients } from "../controllers/webController.js";

export const studentController = (req, res) => {
    res.send('hihihihihihi')
};
export const testController = async (req, res) => {
    const response = await addData("A", 1, "abc/ef/ght/v2", null, {
        "errorCode": "0000",
        "message": "Thành công",
        "data": {
            "merchantSiteCode": "M11445492972676",
            "orderCode": "9592",
            "orderDescription": "9592",
            "amount": "3232000",
            "custName": null,
            "custEmail": null,
            "custMobile": null,
            "custAddress": null,
            "status": "AVAILABLE",
            "terminalName": "",
            "storeName": "",
            "invoiceNo": "INVOICE001",
            "storeId": "S18196876643385",
            "promotionCode": null,
            "terminalId": "T19877154041850",
            "remark": null,
            "expiryDate": "2024-09-11 11:10:05.395",
            "qrData": "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAABuElEQVR4Xu2YUWrDMBBEBTpAjqSr60g+gEHdN+O0IoH0NwNe3GKv3s90NSPRtj7XbK+dl7oB1w24bsAlYLaqx2qPefKss42TltdigPqppQ45Tsj6vPpBQIkqwDL5DcZLILDWMerpR+tSnQlMXh6rAL3kActb7hi15QpoVv2+J78boHV5//nQ8loK4NJ0SmnZv42tmwIwJsWvjFODq2HxgAUBl1/w/tC7QuDIApb2V+06NVA3dabMMKCkldktTerASLMgAMsoeJlaLXXCeWwyMwA9LAFc9mdeUUD5newy6RyGDwO4KNr+ntSb/SMAZFrdFciLENjtHwEgTdNxv+tw3PMhAZge00kcM6ZaksZfmRlAY0Cchm7yeXCBjwKq03y+d8HWuOdDBMCqQwCZ5aCB5N3+AYCcItd7XqVXJtJaDMCYFvfeZsw5kAZM/E6HHD51XdHqjAJcE41/ITx3+ycAiGqcI4Qw9lEUy0RJwFICyPUwT5lhAJcT/cPQF/gu4ZnAxDLctZp2nfZeHoBfbP/6XIzv9e/w5YA/7femHF6cKWFAY0BTZwpPHY5dZBTwqW7AdQOuG3D9D/wAsV594NINxmMAAAAASUVORK5CYII=",
            "checkoutUrl": "",
            "tokenCode": "MD171723435805359WT"
        }
    })
    return res.json(response)
};
export const respAPIController = async (req, res) => {
    //const {invoiceNo, terminalId} = req.body; // tương đương req.body.email, req.body.password, req.body.name
    console.log("------------------request---------------------")
    console.log("path: " + req.path)
    console.log("body: ")
    console.log(req.body)
    console.log("----------------end request--------------------")
    if(req.body){
        const path = req.path;
        const response = await getAPIByPath(path);
        let jsonResponse = typeof response === 'string' ? JSON.parse(response) : response
        
        if (clients[path]) { 
            const jsonBodyString = JSON.stringify(req.body, null, 2);
            const jsonHeaderString = JSON.stringify(req.headers, null, 2);
            const jsonResponseString = JSON.stringify(jsonResponse, null, 2);
            clients[path].send(
                '<div style="margin: 0px; border: 0.5px solid greenyellow; padding: 5px;">'
                + '<p style="padding: 0px; text-align: center; color: blueviolet; margin: 0px;">GÓI TIN TỪ POS</p>' 
                + '<p style="padding: 0px; margin: 0px; color: royalblue;">Header</p>'
                + '<pre style="padding: 0px; margin: 0px;">' + jsonHeaderString + '</pre>'
                + '<p style="padding: 0px; margin: 0px; color: royalblue;">Body</p>'
                + '<pre style="padding: 0px; margin: 0px;">' + jsonBodyString + '</pre>'
                + '<p style="padding: 0px; text-align: center; color: blueviolet; margin: 0px;">GÓI TIN HOST PHẢN HỒI</p>'
                + '<p style="padding: 0px; margin: 0px; color: royalblue;">Body</p>'
                + '<pre style="padding: 0px; margin: 0px;">' + jsonResponseString + '</pre></div>');
        }
        
        return res.json(jsonResponse)
    } else {
        return res.json({
            status: 'err',
            message: "Thiếu trường"
        })
    }
    
};