const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config/dbAuth'); 
const {UserInputError} = require('apollo-server');
const {validateRegisterInput} = require('../utils/validators');
const {validateLoginInput} = require('../utils/validators');


const resolvers =  {
    Query: {
         getPosts: async () => {
            const posts = await Post.find();
            return posts;
    },
},
    Mutation: {
        register: async (parent, {registerInput: {username, email, password, confirmPassword}}, context, info) => {
                const {valid, errors} = validateRegisterInput(username, email, password, confirmPassword);
                if(!valid) {
                    throw new UserInputError('Errors', {errors});
                }
                const user = await User.findOne({username});
                if(user) {
                    throw new UserInputError('Username is taken', {
                        errors: {
                            username: 'This username is taken'
                        }
                    });
                }
                password = await bcrypt.hash(password, 10);
                const newUser = new User({ 
                    email,
                    username,
                    password,
                    createdAt: new Date().toISOString()
                });
                const res = await newUser.save();
                const token = jwt.sign({
                    id: res.id,
                    email: res.email,
                    username: res.username
                }, SECRET_KEY, {expiresIn: '1h'});
                return {
                    ...res._doc,
                    id: res._id,
                    token
                };
            }
            
                }
};
module.exports = resolvers;

