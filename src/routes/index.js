import webRouter from './web.js'
import apiRouter from './api.js'

const routes = (app) => {  
    app.use('/view', webRouter);    
    app.use('/', apiRouter);    
}

export default routes