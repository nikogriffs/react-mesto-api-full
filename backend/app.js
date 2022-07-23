/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const path = require('path');
const auth = require('./middlewares/auth');
const { login, createUser, logout } = require('./controllers/users');
const NotFoundError = require('./errors/not-found-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/error');
const { validation } = require('./middlewares/validator');

const DEV_MONGO_URL = 'mongodb://localhost:27017/mestodb';

const { PORT = 5000, NODE_ENV, MONGO_URL } = process.env;

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(
  cors({
    credentials: true,
    origin: [
      'https://react-mesto.herokuapp.com/',
      'http://react-mesto.herokuapp.com/',
    ],
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : DEV_MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);
app.use(limiter);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  login
);

app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(validation),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  createUser
);

app.get('/logout', logout);

app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.use(errorLogger);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
