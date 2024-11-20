import { engine } from 'express-handlebars';
import express from 'express';

const app = request()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log('Server run: ', port)
})