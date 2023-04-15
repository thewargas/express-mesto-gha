const Card = require('../models/card');
const {
  CREATE_CODE,
  checkId,
  selectError,
} = require('../utils/validator');

const createCard = (req, res) => {
  const { _id } = req.user;
  const { name, link } = req.body;
  Card.create({ name, link, owner: _id })
    .then((card) => {
      res.status(CREATE_CODE).send(card);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const getAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .populate('likes')
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.cardId })
    .then((card) => {
      checkId(card, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const addLikeCard = (req, res) => {
  const { _id } = req.user;
  Card.findByIdAndUpdate(
    { _id: req.params.cardId },
    { $addToSet: { likes: _id } },
    { new: true },
  )
    .populate('owner')
    .populate('likes')
    .then((card) => {
      checkId(card, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const removeLikeCard = (req, res) => {
  const { _id } = req.user;

  Card.findByIdAndUpdate(
    { _id: req.params.cardId },
    { $pull: { likes: _id } },
    { new: true },
  )
    .populate('owner')
    .populate('likes')
    .then((card) => {
      checkId(card, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

module.exports = {
  createCard,
  getAllCards,
  deleteCard,
  addLikeCard,
  removeLikeCard,
};
