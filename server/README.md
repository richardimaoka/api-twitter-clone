```
npx nodemon --watch schema.gql index.js
json-server --watch db.json
```

Wanna convert the below timeline.tweets from object to array?

```
  "timeline": {
    "tweets": {
      "1406771011266043908": {
        "user": {
          "id": 2875908842,
          "idStr": "2875908842",
          "name": "\u30ea\u30c1\u30e3\u30fc\u30c9 \u4f0a\u771f\u5ca1",
          "screenName": "RichardImaokaJP",
          "location": null,
          "description": "\u4e2d\u5805\u30a8\u30f3\u30b8\u30cb\u30a2",
          "url": "https://blog-jp.richardimaoka.net",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "https://blog-jp.richardimaoka.net",
                  "expandedUrl": "https://blog-jp.richardimaoka.net",
                  "displayUrl": "blog-jp.richardimaoka.net",
                  "indices": [0, 33]
                }
              ]
            },
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followersCount": 342,
          "friendsCount": 223,
          "listedCount": 7,
          "createdAt": "Sat Oct 25 00:13:42 +0000 2014",
          "favouritesCount": 1628,
          "utcOffset": null,
          "timeZone": null,
          "geoEnabled": false,
          "verified": false,
          "statusesCount": 3398,
          "lang": null,
          "contributorsEnabled": false,
          "isTranslator": false,
          "isTranslationEnabled": false,
          "profileBackgroundColor": "C0DEED",
          "profileBackgroundImageUrl": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profileBackgroundImageUrlHttps": "https://abs.twimg.com/images/themes/theme1/bg.png",
          "profileBackgroundTile": false,
          "profileImageUrl": "http://pbs.twimg.com/profile_images/1208118895741001728/-t2DIJt-_normal.jpg",
          "profileImageUrlHttps": "https://pbs.twimg.com/profile_images/1208118895741001728/-t2DIJt-_normal.jpg",
          "profileBannerUrl": "https://pbs.twimg.com/profile_banners/2875908842/1568031488",
          "profileLinkColor": "1DA1F2",
          "profileSidebarBorderColor": "C0DEED",
          "profileSidebarFillColor": "DDEEF6",
          "profileTextColor": "333333",
          "profileUseBackgroundImage": true,
          "defaultProfile": true,
          "defaultProfileImage": false,
          "canMediaTag": null,
          "following": false,
          "followRequestSent": null,
          "notifications": null,
          "blocking": false,
          "blockedBy": false,
          "profileInterstitialType": "",
          "translatorType": "regular",
          "withheldInCountries": [],
          "followedBy": false
        },
        "createdAt": "Mon Jun 21 00:28:40 +0000 2021",
        "id": 1406771011266043908,
        "idStr": "1406771011266043908",
        "fullText": "\u4ed5\u4e8b\u3068\u304b\u3067\u81ea\u5206\u3092\u9650\u754c\u307e\u3067\u8ffd\u3044\u8fbc\u3093\u3067\u5f37\u304f\u306a\u308b\u3001\u30b5\u30a4\u30e4\u4eba\u578b\u306e\u6210\u9577\u304c\u3067\u304d\u308b\u306e\u306f\u5c11\u6570\u6d3e\u3060\u3068\u6700\u8fd1\u601d\u3063\u3066\u307e\u3059\u3002\u58f0\u306e\u5927\u304d\u3044\u4eba\u306e\u4e2d\u306b\u306f\u30b5\u30a4\u30e4\u4eba\u578b\u304c\u591a\u3044\u3057\u3001\u305d\u306e\u4f53\u9a13\u306f\u5f37\u304f\u5370\u8c61\u306b\u6b8b\u308a\u3084\u3059\u3044\u3093\u3067\u3059\u3051\u3069\u3001\u591a\u304f\u306e\u5730\u7403\u4eba\u306f\u6b7b\u306e\u6df5\u307e\u3067\u8ffd\u3044\u8fbc\u3093\u3060\u3089\u666e\u901a\u306b\u6b7b\u306b\u307e\u3059\u3002",
        "truncated": false,
        "displayTextRange": [0, 116],
        "entities": {
          "hashtags": [],
          "symbols": [],
          "userMentions": [],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "inReplyToStatusId": null,
        "inReplyToStatusIdStr": null,
        "inReplyToUserId": null,
        "inReplyToUserIdStr": null,
        "inReplyToScreenName": null,
        "userId": 2875908842,
        "userIdStr": "2875908842",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "isQuoteStatus": false,
        "retweetCount": 1,
        "favoriteCount": 14,
        "replyCount": 0,
        "quoteCount": 0,
        "conversationId": 1406771011266043908,
        "conversationIdStr": "1406771011266043908",
        "conversationMuted": false,
        "favorited": false,
        "retweeted": false,
        "lang": "ja"
      }
    }
  }
```

then do this

```
cat server/db.default.json
    | jq ".timeline.tweets \ ## this retrieves the object
    | to_entries \           ## this gets { key: "", value: {} }
    | map_values(.value)"    ## this gets the resulting flat array
```
