const validator = require('validator');

module.exports.validation = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new Error('URL validation err');
};

// router.post(
//   "/cards",
//   celebrate({
//     body: Joi.object().keys({
//       name: Joi.string().required().min(2).max(30),
//       link: Joi.string().required().custom(method)
//     }),
//   }),
//   createCard
// );
