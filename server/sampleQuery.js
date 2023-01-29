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

// query Query{
//     getPost(postId: "63d585421d01dd752683c365") {
//       id
//       body
//       createdAt
//       username
//     }
//   }
//////////////////////////////////////////////// Add HEader token to test, get token from login mutation, Bearer <token> must be in quotes 
// mutation{
//     createPost(body: "2nd post created") {
//       id
//       createdAt
//       username
//       body
//     }
//   }
//////////////////////////////////add header like above, token must be from user who created post
// mutation deletePost{
//     deletePost(postId: "63d6a95794dceb7afab41e95")
//   }

// mutation Mutation  {
//     createComment(postId: "63d6b228cd31b93571bfdf05", body: "This is a comment on my post") {
//       id
//       body
//       createdAt
//       username
//       likes {
//         id
//         createdAt
//         username
//       }
//     }
//   }

// mutation Mutation {
//     deleteComment(postId: "63d6b228cd31b93571bfdf05", commentId: "63d6b2aecd31b93571bfdf08") {
//       id
//       body
//       createdAt
//       username
//       comments {
//         id
//         createdAt
//         username
//         body
//       }
//     }
//   }

// mutation Mutation {
//     likePost(postId: "63d6b228cd31b93571bfdf05") {
//       id
//       body
//       createdAt
//       username
//       comments {
//         id
//         createdAt
//         username
//         body
//       }
//     }
//   }