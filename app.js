const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = { _id: '64396c959473e061bc045875' };

  next();
});

app.use(router);

app.use((req, res) => {
  res.status(404).send({ message: 'Неправильный адрес' });
});

app.listen(PORT, () => {
  console.log(`start server at port ${PORT}`);
});
