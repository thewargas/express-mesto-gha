const userRouter = require('express').Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  changeUserInfo,
  changeAvatar,
} = require('../controllers/users');

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:userId', getUserById);
userRouter.patch('/me', changeUserInfo);
userRouter.patch('/me/avatar', changeAvatar);

module.exports = userRouter;
