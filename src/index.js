import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.static('src/public'));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

routes(app);

app.listen(port, () => {
  console.log('Server run: ', port)
});