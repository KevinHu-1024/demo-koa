const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  password: String,
  userSharedIds: Array,
  userStaredIds: Array,
  userIgnoredIds: Array
});

let User = mongoose.model('User', userSchema);

exports.User = User;
