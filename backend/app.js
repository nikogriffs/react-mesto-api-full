/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { celebrate, Joi, isCelebrateError } = require('celebrate');
const cors = require('cors');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');
const NotFoundError = require('./errors/not-found-err');
const BadRequestError = require('./errors/bad-request-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// const allowedCors = [
//   'https://praktikum.tk',
//   'http://praktikum.tk',
//   'http://localhost:3000'
// ];

// const { method } = req;

// const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

// const requestHeaders = req.headers['access-control-request-headers'];

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());

// app.use(function (req, res, next) {
//   const { origin } = req.headers;
//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//   }

//   next();
// });

// if (method === 'OPTIONS') {
//   res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//   res.header('Access-Control-Allow-Headers', requestHeaders);

//   return res.end();
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(helmet());
app.use(cookieParser());

app.use(requestLogger);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);

app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.use(errorLogger);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use((err, req, res, next) => {
  if (isCelebrateError(err) || err.name === 'SyntaxError') {
    throw new BadRequestError('Переданы некорректные данные');
  }

  return next(err);
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  return next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
