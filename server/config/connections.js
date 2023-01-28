const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chirp',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo db connection successfull 🔥')
})

connection.on('error' , ()=>{
    console.log('Mongo db connection error')
})


module.exports = mongoose.connection;