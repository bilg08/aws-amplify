

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const POSTS = [
    { id: 1, title: "AWS Lambda: How To Guide." },
    { id: 2, title: "AWS Amplify Launches @function and @key directives." },
    { id: 3, title: "Serverless 101" }
  ];
  const COMMENTS = [
    { postId: 1, content: "Great guide!" },
    { postId: 1, content: "Thanks for sharing!" },
    { postId: 2, content: "Can't wait to try them out!" }
  ];
  
  function getPosts() {
    return POSTS;
  }
  function getPost(id) {
    const POST = POSTS.find(pst => pst.id == id);
    return POST;
  }
  
  function getCommentsForPost(postId) {
    return COMMENTS.filter(comment => comment.postId === postId);
  }

  const resolvers = {
    Query: {
      posts: ctx => {
        return getPosts();
      },
      post: ctx => {
        const postId = ctx.arguments.postId;
        return getPost(postId);
      }
    },
    Post: {
      comments: ctx => {
        return getCommentsForPost(ctx.source.id);
      },
    },
  }
  
  exports.handler = async (event) => {
    const typeHandler = resolvers[event.typeName];
    if (typeHandler) {
      const resolver = typeHandler[event.fieldName];
      if (resolver) {
        return await resolver(event);
      }
    }
    throw new Error("Resolver not found.");
  };