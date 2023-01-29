// mutation Mutation{
//     register(registerInput:{
//         username: "username"
//         email: "someemail@me.com"
//         password: "111111"
//         confirmPassword: "111111"
//     } ) {
//       id
//       email
//       token
//       username
//       createdAt
//     }
//   }

//   query Query {
//     getPosts {
//       id
//       body
//       createdAt
//       username
//     }
//   }

//// get header token from login mutation for testing
// mutation Mutation{
//     login(username: "username", password: "111111") {
//       id
//       email
//       token
//       username
//       createdAt
//     }
//   }