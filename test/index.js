const mongoose = require('mongoose');
const dbConfig = require('../config/db');

mongoose.connect('mongodb://' + dbConfig.host + ':' + dbConfig.port);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB connected on ' + 'mongodb://' + dbConfig.host + ':' + dbConfig.port);
});

// TODO: 需增加监视进程，当应用终止是关闭数据库
const kittySchema = mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
silence.save(function (err) {
  if (err) {
    console.error(err);
    return;
  } 
  console.log(2);
});