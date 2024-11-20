import webRouter from './web.js'
import apiRouter from './api.js'

const routes = (app) => {  
    app.use('/', webRouter);    
    app.use('/api', apiRouter);    
}

export default routes