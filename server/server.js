const express = require('express');// express is a function
const app = express();// app is an object
const {ApolloServer} = require('apollo-server');// ApolloServer is a class
const db = require('./config/connections');// db is a promise
const { typeDefs, resolvers } = require('./schemas');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());





const PORT = process.env.PORT || 4000;// PORT is a number, and process.env.PORT is a number based on the environment


const server = new ApolloServer({// ApolloServer creates a server
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});


    server.listen(PORT, () => {
        
        console.log(`🚀 Server running on port ${PORT},🚀`);
        console.log(`🔥 Use GraphQL at http://localhost:${PORT}${server.graphqlPath},🔥`)
        db.once('open,', ()=>{
    });
})


