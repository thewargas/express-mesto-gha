const Card = require('../models/card');
const {
  SUCCESS_CODE,
  checkId,
  selectError,
} = require('../utils/validator');

const createCard = (req, res) => {
  const { id } = req.user;
  const { name, link } = req.body;
  Card.create({ name, link, owner: id })
    .then((card) => {
      res.status(SUCCESS_CODE).send(card);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const getAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      res.status(SUCCESS_CODE).send(cards);
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
  Card.findByIdAndUpdate({ _id: req.params.cardId }, { $addToSet: { likes: _id } }, { new: true })
    .then((card) => {
      checkId(card, res);
    })
    .catch((err) => {
      selectError(err, res);
    });
};

const removeLikeCard = (req, res) => {
  const { _id } = req.user;

  Card.findByIdAndUpdate({ _id: req.params.cardId }, { $pull: { likes: _id } }, { new: true })
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
