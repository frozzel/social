const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    createdAt: {type: String}
});

const User = model('User', userSchema);

module.exports = User;