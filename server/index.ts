const { ApolloServer, gql } = require("apollo-server");
const {GraphQLScalarType, Kind } = require('graphql');
const fs = require("fs");
const axios = require('axios').default;

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/twitter.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tweets(parent, args, context, info) {
      return context.tweets.data
    },
    timeline(parent, args, context, info) {
      return {
        tweets: context.timelineTweets.data
      }
    }
  },
  Mutation: {
    addTweet: async (parent, args, context, info) => {
      console.log("maxTweetId = ", context.maxTweetId)
      const current = new Date()
      const tweet = {
        id : context.maxTweetId,
        user: context.loginUser,
        createdAt: current.toISOString() ,
        fullText: args.fullText,
        favoriteCount: 0,
        replyCount: 0,
        retweetCount: 0,
        quoteCount: 0
      }

      try {
        const result = await axios.post('http://localhost:3001/timeline.tweets/', tweet)
        return tweet
      } catch (e) {
        console.log("Server error happend on mutatoin addTweet!!!")
        console.log(e.stack)
        throw e
      }
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
    const tweets =  (await axios.get('http://localhost:3001/tweets'));
   
    const toIdNumber = number => {
      const parsed = Number.parseInt(number)
      console.log("parsed = ", parsed)
      if(Number.isNaN(parsed)) return 0
      else return parsed
    }
    const maxTweetId = tweets.data.reduce((x, y) => {
      console.log("x = ", x)
      console.log("y = ", y)
      return Math.max(toIdNumber(x.id), toIdNumber(y.id))
    });

    return ({
      loginUser: user,
      tweets: tweets,
      maxTweetId: maxTweetId,
      timelineTweets: await axios.get('http://localhost:3001/timeline.tweets')
    })
  }
});

const getUser = (authToken) => ({
  id: 2875908842,
  screenName: "RichardImaokaJP",
  url: "https://blog-jp.richardimaoka.net",
  profileImageUrl: "http://pbs.twimg.com/profile_images/1208118895741001728/-t2DIJt-_normal.jpg"
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
