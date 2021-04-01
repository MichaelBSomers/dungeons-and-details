const mongoose = require('mongoose');

const {Schema} = mongoose;

const characterSchema = new Schema({
  name: {
    type: String
  },
}, {
    collection: 'character'
  })

module.exports = mongoose.model('Character', characterSchema)
