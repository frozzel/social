const {model, Schema} = require('mongoose');


const postSchema = new Schema({
    body: {type: String},
    username: {type: String},
    createdAt: {type: String},
    comments: [
        {
            body: {type: String},
            username: {type: String},
            createdAt: {type: String}
        }
    ],
    likes: [
        {
            username: {type: String},
            createdAt: {type: String},
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Post = model('Post', postSchema);

module.exports = Post;