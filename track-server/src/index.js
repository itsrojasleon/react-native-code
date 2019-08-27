const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const app = express();

app.use(authRouter);

const mongoUri =
  'mongodb+srv://rojasleon:D9SEMGBUZfABF9ZL@cluster0-13ox1.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', error => {
  console.log('Error connecting to Mongo', error);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
