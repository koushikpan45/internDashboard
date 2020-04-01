const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Intern = new Schema({
   name: {
      type: String
   },
   address: {
      type: String
   },
   date: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   depositAmount: {
      type: Number
   },
   city: {
      type: String
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Intern', Intern)