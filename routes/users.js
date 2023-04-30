const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getAllUsers,
  getUserById,
  changeUserInfo,
  changeAvatar,
  getUser,
} = require('../controllers/users');
const { urlRegExp } = require('../utils/constants');

userRouter.get('/', getAllUsers);

userRouter.get('/me', getUser);

userRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
}), getUserById);

userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    about: Joi.string(),
  }),
}), changeUserInfo);

userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(urlRegExp),
  }),
}), changeAvatar);

module.exports = userRouter;
