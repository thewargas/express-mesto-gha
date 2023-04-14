const userRouter = require('express').Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  changeUserInfo,
  changeAvatar,
} = require('../controllers/users');

userRouter.post('/users', createUser);
userRouter.get('/users', getAllUsers);
userRouter.get('/users/:userId', getUserById);
userRouter.patch('/users/me', changeUserInfo);
userRouter.patch('/users/me/avatar', changeAvatar);

module.exports = userRouter;
