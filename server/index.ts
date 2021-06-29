const { ApolloServer, gql } = require("apollo-server");
const {GraphQLScalarType, Kind } = require('graphql');
const fs = require("fs");
const axios = require('axios').default;

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/twitter.gql"), "utf8")}
`;

const timeStampScalar = new GraphQLScalarType({
  name: 'TimeStamp',
  description: 'TimeStamp scalar type',
  serialize(stringValue) {
    return stringValue ; // Convert to outgoing JSON value
  },
  parseValue(stringValue) {
    return stringValue; // Convert incoming JSON value to backend representation
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to backend representation
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Query: {
    tweets(parent, args, context, info) {
      return context.tweets.data
    },
    timeline(parent, args, context, info) {
      return context.timeline.data
    }
  },
  Tweet: {
    user(parent) {
      return parent.user
    }
  },
  Timeline: {
    tweets(parent, args, context, info) {
      return Object.values(parent.tweets)
    }
  },
  TimeStamp: timeStampScalar,
  Mutation: {
    addTweet: async (parent, args, context, info) {
      const current = new Date()
      const tweet = {
        id : 10,
        user: context.loginUser,
        createdAt: current.toISOString() ,
        fullText: args.fullText,
        favoriteCount: 0,
        replyCount: 0,
        retweetCount: 0,
        quoteCount: 0
      }

      axios.post('http://localhost:3001/tweets/
      return {id: "s", user: "u", createdAt: "c", fullText: "f"}
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false,
  context: async ({req}) => {
    const authToken = req.headers.authorization || '';
    const user = getUser(authToken);
    return ({
      loginUser: user,
      tweets: await axios.get('http://localhost:3001/tweets'),
      timeline: await axios.get('http://localhost:3001/timeline')
    })
  }
});

const getUser = (authToken) => "2875908842"

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
