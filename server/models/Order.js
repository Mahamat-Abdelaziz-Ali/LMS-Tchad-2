const mongoose = require('mongoose');
const { OrderSchema } = require('./OrderSchema');



module.exports = mongoose.model('Order', OrderSchema)
