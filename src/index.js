import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
const port = process.env.PORT;

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

app.listen(port, () => {
  console.log('Server run: ', port)
});