const cardsRouter = require('express').Router();
const {
  createCard,
  getAllCards,
  deleteCard,
  addLikeCard,
  removeLikeCard,
} = require('../controllers/cards');

cardsRouter.post('/cards', createCard);
cardsRouter.get('/cards', getAllCards);
cardsRouter.delete('/cards/:cardId', deleteCard);
cardsRouter.put('/cards/:cardId/likes', addLikeCard);
cardsRouter.delete('/cards/:cardId/likes', removeLikeCard);

module.exports = cardsRouter;
