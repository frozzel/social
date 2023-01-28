const express = require('express');// express is a function
const app = express();// app is an object
const {ApolloServer} = require('apollo-server');// ApolloServer is a class
// const gql = require('graphql-tag');// gql is a function
const db = require('./config/connections');// db is a promise
const { typeDefs, resolvers } = require('./schemas');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const Post = require('./models/Post');// Post is a model

// const typeDefs = gql `
// type Post{
//     id: ID!
//     body: String!
//     createdAt: String!
//     username: String!
// }

// type Query{
//     post: [Post]
// }`;

// const resolvers =  {
//     Query: {
//       post: async () => {
//         return await Post.find();
//     }
// }
// };

const PORT = process.env.PORT || 4000;// PORT is a number, and process.env.PORT is a number based on the environment


const server = new ApolloServer({// ApolloServer creates a server
    typeDefs,
    resolvers
});


    server.listen(PORT, () => {
        
        console.log(`Server running on port ${PORT},🔥`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath},🔥`)
        db.once('open,', ()=>{
    });
})


