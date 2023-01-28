const Post = require('../models/Post');

const resolvers =  {
    Query: {
        posts: async () => {
            const posts = await Post.find();
            return posts;
        }
    }
}
module.exports = resolvers;