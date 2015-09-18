var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PersonSchema = new Schema({
  name: String,
  age: Int
});

mongoose.model('Person', PersonSchema);