const mongoose = require('mongoose', { useMongoClient: true });

mongoose.connect('mongodb://localhost/noderest');
mongoose.Promise = global.Promise;

module.exports = mongoose;