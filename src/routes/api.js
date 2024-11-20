import { studentController, testController } from "../controllers/apiController.js";

const routes = (app) => {
    app.get('/test', testController);
    app.get('/', studentController);
    
}

export default routes