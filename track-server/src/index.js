require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authRouter);
app.use(trackRoutes);

const mongoUri =
  'mongodb+srv://rojasleon:D9SEMGBUZfABF9ZL@cluster0-13ox1.mongodb.net/test?retryWrites=true&w=majority';

if (!mongoUri) {
  throw new Error(`MongoURI was not supplied`);
}

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

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
