/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const posts = /* GraphQL */ `
  query Posts {
    posts {
      id
      title
      comments {
        postId
        content
      }
    }
  }
`;
export const post = /* GraphQL */ `
  query Post($postId: String) {
    post(postId: $postId) {
      id
      title
      comments {
        postId
        content
      }
    }
  }
`;
