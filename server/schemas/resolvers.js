const Post = require('../models/Post');

const resolvers =  {
    Query: {
         getPosts: async () => {
            const posts = await Post.find();
            return posts;
    },
}
}
module.exports = resolvers;

