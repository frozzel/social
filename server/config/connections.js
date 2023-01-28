const mongoose = require('mongoose');
const { MONGODB_URL } = require('./dbAuth.js');

mongoose.connect(MONGODB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('🤑  Mongo db connection successfull 🤑')
})

connection.on('error' , ()=>{
    console.log(' 😈 Mongo db connection error 😈')
})


module.exports = mongoose.connection;



// || 'mongodb://localhost/chirp'

