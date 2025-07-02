const { celebrate, Joi } = require("celebrate");
const passwordComplexity = require("joi-password-complexity");

// register joi validation
const registerUserValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required().label("name"),
    email: Joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  }),
});

// login joi validation
const loginUserValidation = celebrate({
  body: Joi.object({
    email: Joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  }),
});

// updating the  password joi validation
const updatePasswordValidation = celebrate({
  body: Joi.object({
    old_password: passwordComplexity().required().label("Old Password"),
    new_password: passwordComplexity().required().label("New Password"),
  }),
});

module.exports = {
  loginUserValidation,
  registerUserValidation,
  updatePasswordValidation,
};
