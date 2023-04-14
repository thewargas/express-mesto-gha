const mongoose = require('mongoose');
require('mongoose-type-url');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30,
  },
  about: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30,
  },
  avatar: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
