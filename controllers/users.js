const User = require('../models/user');
const {
  CREATE_CODE,
  checkId,
  selectError,
} = require('../utils/validator');

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((newUser) => {
      res.status(CREATE_CODE).send(newUser);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const getUserById = (req, res) => {
  User.findById({ _id: req.params.userId })
    .then((user) => {
      checkId(user, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const changeUserInfo = (req, res) => {
  const { _id } = req.user;
  const { name, about } = req.body;

  User.findByIdAndUpdate(_id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      checkId(user, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const changeAvatar = (req, res) => {
  const { _id } = req.user;
  const { avatar } = req.body;

  User.findByIdAndUpdate(_id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      checkId(user, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  changeUserInfo,
  changeAvatar,
};
