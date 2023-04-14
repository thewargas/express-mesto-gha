const cardsRouter = require('express').Router();
const {
  createCard,
  getAllCards,
  deleteCard,
  addLikeCard,
  removeLikeCard,
} = require('../controllers/cards');

cardsRouter.post('/', createCard);
cardsRouter.get('/', getAllCards);
cardsRouter.delete('/:cardId', deleteCard);
cardsRouter.put('/:cardId/likes', addLikeCard);
cardsRouter.delete('/:cardId/likes', removeLikeCard);

module.exports = cardsRouter;
