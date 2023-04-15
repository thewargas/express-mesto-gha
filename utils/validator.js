const CREATE_CODE = 201;
const ERROR_CODE = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_SERVER = 500;

const errorMessageIncorrect = { message: 'Переданы некорректные данные' };
const errorMessageNotFoundId = { message: 'По данному _id информация не найдена' };
const errorMessageServer = { message: '«На сервере произошла ошибка' };

const checkId = (data, res) => {
  if (!data) {
    return res.status(ERROR_NOT_FOUND).send(errorMessageNotFoundId);
  }
  return res.send(data);
};

const selectError = (err, res) => {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(ERROR_CODE).send(errorMessageIncorrect);
  }
  return res.status(ERROR_SERVER).send(errorMessageServer);
};

module.exports = {
  CREATE_CODE,
  checkId,
  selectError,
};
