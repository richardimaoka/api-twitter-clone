import {Tweet} from "./Twitter"
import {TweetBox} from "./TweetBox"

export const TweetList = ({
  tweets
}: TweetListProps) => {
    return (
      <div>{
        tweets.map(t => (
            <div key={t.id}>
              <TweetBox
                displayName={t.user.screenName}
                screenName={t.user.screenName}
                tweetTime={t.createdAt}
                fullText={t.fullText}
                replyCount={t.replyCount}
                likeCount={t.favoriteCount}
                retweetCount={t.retweetCount}
                />
            </div>
          )
        )}
      </div> 
    )
};

interface TweetListProps {
  tweets: Tweet[]
}