const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shareSchema = new Schema({
  shareId: String,
  title: String,
  detail: String,
  authorId: String,
  isOpen: Boolean,
  staredCount: Number
});

let Share = mongoose.model('Share', shareSchema);
