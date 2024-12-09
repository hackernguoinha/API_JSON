import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import WebSocketController from './controllers/webController.js';
dotenv.config()

const app = express();
const port = process.env.PORT;
const port_socket = process.env.PORT_SOCKET;

//WebSocket
export const wss = new WebSocketServer({ port: port_socket });

app.use(express.static('src/public'));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

//Connect DB
//console.log(process.env.MONGO_DB)
mongoose.connect(process.env.MONGO_DB)
.then(() =>{
  console.log('Connect DB success')
}).catch((err) => {
  console.log(err)
})

routes(app);

WebSocketController(wss);

app.listen(port, () => {
  console.log('Server run: ', port)
  console.log('Socket port: ', port_socket)
});